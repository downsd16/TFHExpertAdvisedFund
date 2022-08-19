import "./expert.css";
import "@fontsource/dm-sans";
import { React, useState } from "react";
import algosdk from 'algosdk';

import calendar_icon from "../../../assets/Proposals/Calendar.svg";
import algo_icon from "../../../assets/Proposals/algorand_logo_mark_black.png";
import plus_icon from "../../../assets/Proposals/Plus icon.svg";

const proposalSampleList = [
  {
    number: 1,
    name: "Preventing or Relieving Suffering Animals",
    status: "Completed",
    icon: "animal",
    preference: "Animal Welfare",
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    end: "10 June 2022",
    amount: "60,000",
  },
  {
    number: 2,
    name: "Promoting or Protecting Human Rights",
    status: "Closing",
    icon: "rights",
    preference: "Human Rights",
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    end: "10 June 2022",
    amount: "60,000",
  },
  {
    number: 3,
    name: "Preventing or Relieving Suffering Animals",
    status: "Active",
    icon: "education",
    preference: "Education",
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    end: "10 June 2022",
    amount: "60,000",
  },
  {
    number: 4,
    name: "Promoting or Protecting Human Rights",
    status: "Active",
    icon: "healthcare",
    preference: "Healthcare",
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    end: "10 June 2022",
    amount: "60,000",
  },
];

const Expert = () => {

  /*
  let client = new algosdk.Algodv2(
    CONSTANTS.algodToken,
    CONSTANTS.baseServer,
    CONSTANTS.port
  );

  //    CALL VOTING FUNCTION
  //    expert only access
  const noop = async (index, choice) => {
    try {
      userAccount.current = await AlgoSigner.accounts({
        ledger: "TestNet",
      });
      const sender = userAccount.current[0]["address"];
      console.log(userAccount.current);

      let vote = "vote";
      
      const appArgs = [];
      appArgs.push(
        new Uint8Array(Buffer.from(vote)),
        new Uint8Array(Buffer.from(choice))
      );

      let params = await client.getTransactionParams().do();
      params.fee = 1000;
      params.flatFee = true;

      // create unsigned transaction
      let txn = algosdk.makeApplicationNoOpTxn(sender, params, index, appArgs);

      // Use the AlgoSigner encoding library to make the transactions base64
      const txn_b64 = await AlgoSigner.encoding.msgpackToBase64(txn.toByte());

      let signedTxs = await AlgoSigner.signTxn([{ txn: txn_b64 }]);
      console.log(signedTxs);

      // Get the base64 encoded signed transaction and convert it to binary
      let binarySignedTx = await AlgoSigner.encoding.base64ToMsgpack(
        signedTxs[0].blob
      );

      // Send the transaction through the SDK client
      let id = await client.sendRawTransaction(binarySignedTx).do();
      console.log(id);

      const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
      console.log("confirmed" + confirmedTxn);

      // display results
      let transactionResponse = await client
        .pendingTransactionInformation(txId)
        .do();
      console.log("Called app-id:", transactionResponse["txn"]["txn"]["apid"]);
      if (transactionResponse["global-state-delta"] !== undefined) {
        console.log(
          "Global State updated:",
          transactionResponse["global-state-delta"]
        );
      }
      if (transactionResponse["local-state-delta"] !== undefined) {
        console.log(
          "Local State updated:",
          transactionResponse["local-state-delta"]
        );
      }
    } catch (err) {
      console.log(err);
    }
  };
  */

  const [currentProposal, setCurrentProposal] = useState(0);

  return (
    <>
      <div className="header">
        <h1 className="headerText">Proposals - Expert</h1>
      </div>
      <div className="wrapperBody">
        <div className="proposalList">
          <div className="newProposalContainer">
            <img className="newProposalImg" src={plus_icon}></img>
            <h1 className="proposalText">New Proposal</h1>
          </div>
          {proposalSampleList.map((proposal, index) => (
            <div
              onClick={() => setCurrentProposal(index)}
              key={index}
              className="proposal"
            >
              <div className="proposalInnerText">
                <p className="proposalText">
                  Proposal #{proposal.number}: {proposal.name}
                </p>
              </div>
              <p className="proposalStatusText">{proposal.status}</p>
              <img
                className="proposalImg"
                src={require("../../../assets/Proposals/" +
                  proposal.icon +
                  ".svg")}
              ></img>
            </div>
          ))}
        </div>
        <div className="proposalInfo">
          <div className="proposalInnerText">
            <p className="proposalText">
              Proposal #{proposalSampleList[currentProposal].number} -{" "}
              {proposalSampleList[currentProposal].preference}
            </p>
            <p className="proposalDetailsText">
              This proposal covers distribution #
              {proposalSampleList[currentProposal].number}. This vote is cast
              for the charitable purpose of{" "}
              {proposalSampleList[currentProposal].preference} and relevant
              experts have been assigned to the distribution.
            </p>
          </div>
          <div className="organizations">
            <p className="proposalText">Organizations:</p>
            {proposalSampleList[currentProposal].organizations.map(
              (expertURL, index) => (
                <img
                  key={index}
                  className="organizationIcon"
                  src={require("../../../assets/Proposals/Company icons/" +
                    expertURL +
                    ".png")}
                ></img>
              )
            )}
          </div>
          <div className="proposalInfoParent">
            <div className="proposalEndDate">
              <img className="informationIcon" src={calendar_icon}></img>
              <p className="proposalText">
                {proposalSampleList[currentProposal].end}
              </p>
            </div>
            <div className="proposalAmount">
              <img className="informationIcon" src={algo_icon}></img>
              <p className="proposalText">
                {proposalSampleList[currentProposal].amount} ALGO
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expert;
