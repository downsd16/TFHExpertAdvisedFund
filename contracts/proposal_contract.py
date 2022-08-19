#   Test PyTeal Contract
#   Author:     Devin Downs
#   Project:    GreenHouse Hackathon
#   Date:       Summer '22

from pyteal import *

"""
Proposal Program
@dev:   Handles voting between experts on donation proposals
"""

def proposal_approval():
    
    """
    Create Global State Arguments
    @dev:       Executed when on_creation is called (contract is created)
    """
    on_creation = Seq(
        [
            App.globalPut(Bytes("Creator"), Txn.sender()),                      #   Store contract creator address
            Assert(Txn.application_args.length() == Int(13)),                   #   Check we have exactly 4 application args (fail if != 4)
            App.globalPut(Bytes("RegBegin"), Btoi(Txn.application_args[0])),
            App.globalPut(Bytes("RegEnd"), Btoi(Txn.application_args[1])),
            App.globalPut(Bytes("VoteBegin"), Btoi(Txn.application_args[2])),
            App.globalPut(Bytes("VoteEnd"), Btoi(Txn.application_args[3])),

            #   Experts 1-5, value passed is public address
            App.globalPut(Bytes("Expert-1"), Btoi(Txn.application_args[4])),
            App.globalPut(Bytes("Expert-2"), Btoi(Txn.application_args[5])),
            App.globalPut(Bytes("Expert-3"), Btoi(Txn.application_args[6])),
            App.globalPut(Bytes("Expert-4"), Btoi(Txn.application_args[7])),
            App.globalPut(Bytes("Expert-5"), Btoi(Txn.application_args[8])),

            #   Organization Addresses
            App.globalPut(Bytes("Org_Address_1"), Btoi(Txn.application_args[9])),
            App.globalPut(Bytes("Org_Address_2"), Btoi(Txn.application_args[10])),

            #   Organization Allocations
            App.globalPut(Bytes("Org_Percent_1"), Btoi(Txn.application_args[11])),
            App.globalPut(Bytes("Org_Percent_2"), Btoi(Txn.application_args[12])),

            Return(Int(1)),
        ]
    )

    #   Check if the transaction sender is the contract creator
    is_creator = Txn.sender() == App.globalGet(Bytes("Creator"))

    #   Check if the transaction sender is an expert
    is_expert = Cond(
        [Txn.sender() == App.globalGet(Bytes("Expert-1")), Int(1)],
        [Txn.sender() == App.globalGet(Bytes("Expert-2")), Int(1)],
        [Txn.sender() == App.globalGet(Bytes("Expert-3")), Int(1)],
        [Txn.sender() == App.globalGet(Bytes("Expert-4")), Int(1)],
        [Txn.sender() == App.globalGet(Bytes("Expert-5")), Int(1)]
    )

    """"
    Optin-In Functionality
    @dev:       Called when users opt-in to contract
    @returns:   TRUE if current round falls between RegBegin/RegEnd, else FALSE
    """
    on_register = Return(
        And(
            Global.round() >= App.globalGet(Bytes("RegBegin")),
            Global.round() <= App.globalGet(Bytes("RegEnd")),
        )
    )


    """
    Close Out Functionality
    @dev:       Called when users want to remove smart contract from balance record
                Records the users vote, and adds this to the global state
    @return:    TRUE if user successfully closes out
    """
    get_vote_of_sender = App.localGetEx(Int(0), App.id(), Bytes("voted"))

    on_closeout = Seq(
        [
            get_vote_of_sender,
            If(
                And(
                    Global.round() <= App.globalGet(Bytes("VoteEnd")),  # voting is still allowed
                    get_vote_of_sender.hasValue(),                      # user has voted
                ),
                App.globalPut(
                    get_vote_of_sender.value(),
                    App.globalGet(get_vote_of_sender.value()) - Int(1),
                ),
            ),
            Return(Int(1)),
        ]
    )



    """
    Voting Functionality
    @dev:           allows the user vote to be stored in global state
    @returns:       TRUE if user passes ASSERTS and vote is tallied
                    FALSE if voting has ended or user already voted
    """
    choice = Txn.application_args[1]
    choice_tally = App.globalGet(choice)
    on_vote = Seq(
        [
            Assert(
                And(
                    Global.round() >= App.globalGet(Bytes("VoteBegin")),    #   Check if current round is within the voting period
                    Global.round() <= App.globalGet(Bytes("VoteEnd")),
                    is_expert
                )
            ),
            get_vote_of_sender,                                             #   Check if user already voted
            If(get_vote_of_sender.hasValue(), Return(Int(0))),
            App.globalPut(choice, choice_tally + Int(1)),
            App.localPut(Int(0), Bytes("voted"), choice),
            Return(Int(1)),
        ]
    )



    """
    Payment Functionality
    @dev:       Once a proposal has passed, we send the two 
                organizations the amount of Algo voted on
    """
    on_passed = Seq(
        [
            Assert(And(
                    App.globalGet(Bytes("Org_Address_1")).hasValue(),
                    App.globalGet(Bytes("Org_Address_2")).hasValue(),
                    App.globalGet(Bytes("Org_Percent_1")).hasValue(),
                    App.globalGet(Bytes("Org_Percent_2")).hasValue()
                    )),
            Seq([
                InnerTxnBuilder.Begin(),
                InnerTxnBuilder.SetFields({
                    TxnField.type_enum: TxnType.Payment,
                    TxnField.receiver: Substring(App.globalGet(Bytes("Org_Address_1")), Int(0), Int(32)),
                    TxnField.amount: Btoi(Substring(App.globalGet(Bytes("Org_Percent_1")), Int(32), Int(40)))
                }),
                InnerTxnBuilder.Submit(),
            ]),
            Seq([
                InnerTxnBuilder.Begin(),
                InnerTxnBuilder.SetFields({
                    TxnField.type_enum: TxnType.Payment,
                    TxnField.receiver: Substring(App.globalGet(Bytes("Org_Address_2")), Int(0), Int(32)),
                    TxnField.amount: Btoi(Substring(App.globalGet(Bytes("Org_Percent_2")), Int(32), Int(40)))
                }),
                InnerTxnBuilder.Submit(),
            ])
    ])



    """
    OnComplete Conditions
    @dev:       Checks all conditions in 'Cond()' before executing
    """
    program = Cond(
        [Txn.application_id() == Int(0), on_creation],
        [Txn.on_completion() == OnComplete.DeleteApplication, Return(is_creator)],
        [Txn.on_completion() == OnComplete.UpdateApplication, Return(is_creator)],
        [Txn.on_completion() == OnComplete.CloseOut, on_closeout],
        [Txn.on_completion() == OnComplete.OptIn, on_register],
        [Txn.application_args[0] == Bytes("vote"), on_vote],
        [Txn.application_args[0] == Bytes(""), on_passed]
    )
    return program




"""
Clear State Program
@dev:   Used only for clearing local user state  
"""
def clear_state_program():
    get_vote_of_sender = App.localGetEx(Int(0), App.id(), Bytes("voted"))
    program = Seq(
        [
            get_vote_of_sender,
            If(
                And(
                    Global.round() <= App.globalGet(Bytes("VoteEnd")),
                    get_vote_of_sender.hasValue(),
                ),
                App.globalPut(
                    get_vote_of_sender.value(),
                    App.globalGet(get_vote_of_sender.value()) - Int(1),
                ),
            ),
            Return(Int(1)),
        ]
    )

    return program



#   Compilation Helper
if __name__ == "__main__":
    with open("proposal_approval.teal", "w") as f:
        compiled = compileTeal(proposal_approval(), mode=Mode.Application, version=5)
        f.write(compiled)
    
    with open("vote_clear_state.teal", "w") as f:
        compiled = compileTeal(clear_state_program(), mode=Mode.Application, version=5)
        f.write(compiled)