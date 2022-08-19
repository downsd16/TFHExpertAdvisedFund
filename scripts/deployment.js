const fs = require("fs");
const algosdk = require("algosdk");

//SMART CONTRACT DEPLOYMENT
// declare application state storage (immutable)
const localInts = 0;
const localBytes = 1;
const globalInts = 31; // 11 for setup + 20 for choices
const globalBytes = 1;

// get accounts from mnemonic
const creatorMnemonic =
  "veteran piano document defense crash laptop family retire digital clip laugh theme science acquire account interest capital similar reject bleak scorpion promote nest about slab";
const userMnemonic =
  "wrist memory clump large puzzle add caught clarify host old shrug north price document egg wink ball hockey beauty target axis sustain asthma abstract own";
const creatorAccount = algosdk.mnemonicToSecretKey(creatorMnemonic);
const userAccout = algosdk.mnemonicToSecretKey(userMnemonic);
const creatorAddress = creatorAccount.addr;
const sender = userAccout.addr;

//Generate Account
const account = algosdk.generateAccount();
const secretkey = account.sk;

// Connect your client
algod_address = "http://localhost";
algod_token =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
port = 4001;

let client = new algosdk.Algodv2(algod_token, algod_address, port);

// Read Teal File
let approvalProgram = "";
let clear_state_program = "";

try {
  approvalProgram = fs.readFileSync("../contracts/proposal_approval.teal", "utf8");
  clear_state_program = fs.readFileSync("../contracts/vote_clear_state.teal", "utf8");
} catch (err) {
  console.error(err);
}

// Compile Program
const compileProgram = async (client, programSource) => {
  let encoder = new TextEncoder();
  let programBytes = encoder.encode(programSource);
  let compileResponse = await client.compile(programBytes).do();
  let compiledBytes = new Uint8Array(
    Buffer.from(compileResponse.result, "base64")
  );
  console.log("PASSED COMPILATION")
  return compiledBytes;
};

// convert 64 bit integer i to byte string
const intToBytes = (integer) => {
  return integer.toString();
};

// CREATE APP
const createApp = async (
  sender,
  approvalProgram,
  clearProgram,
  localInts,
  localBytes,
  globalInts,
  globalBytes,
  app_args
) => {
  try {
    const onComplete = algosdk.OnApplicationComplete.NoOpOC;

    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;

    let txn = algosdk.makeApplicationCreateTxn(
      sender,
      params,
      onComplete,
      approvalProgram,
      clearProgram,
      localInts,
      localBytes,
      globalInts,
      globalBytes,
      app_args
    );
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(creatorAccount.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    let confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
      let appId = transactionResponse["application-index"];
    return appId;
  } catch (err) {
    console.log(err);
  }
};

//  OPTIN
//  create unsigned transaction
const Optin = async (sender, index) => {
  try {
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;

    let txn = algosdk.makeApplicationOptInTxn(sender, params, index);
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(userAccout.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
  } catch (err) {
    console.log(err);
  }
};

//  CALL(NOOP)
const noop = async (sender, index) => {
  try {
    let vote = "vote";
    // let choice = localStorage.getItem("candidate")
    const appArgs = [];
    appArgs.push(
      new Uint8Array(Buffer.from(vote)),
      new Uint8Array(Buffer.from("choice"))
    );
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;

    // create unsigned transaction
    let txn = algosdk.makeApplicationNoOpTxn(sender, params, index, appArgs);
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(userAccout.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
  } catch (err) {
    console.log(err);
  }
};


//READ STATE
// read local state of application from user account
const readLocalState = async (index) => {
  try {
    let accountInfoResponse = await client
      .accountInformation(userAccout.addr)
      .do();
    let localState = accountInfoResponse["apps-local-state"];
    return localState.map((item) => {
      if (item["id"] == index) {
        let localStateItem =
          accountInfoResponse["apps-local-state"][item]["key-value"];
        localStateItem.map((local) => {
          return local;
        });
      }
      return item;
    });
  } catch (err) {
    console.log(err);
  }
};

// read global state of application
const readGlobalState = async (index) => {
  try {
    let applicationInfoResponse = await client.getApplicationByID(index).do();
    let globalState = applicationInfoResponse["params"]["global-state"];
    return globalState.map((state) => {
      return state;
    });
  } catch (err) {
    console.log(err);
  }
};

//UPDATE
// create unsigned transaction
const update = async (sender, index, approvalProgram, clearProgram) => {
  try {
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;

    let txn = algosdk.makeApplicationUpdateTxn(
      sender,
      params,
      index,
      approvalProgram,
      clearProgram
    );

    // sign, send, await
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(creatorAccount.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
    let appId = transactionResponse["txn"]["txn"].apid;
  } catch (err) {
    console.log(err);
  }
};

// CLOSE OUT
// create unsigned transaction
const closeOut = async (sender, index) => {
  try {
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    let txn = algosdk.makeApplicationCloseOutTxn(sender, params, index);

    // sign, send, await
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(userAccout.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
  } catch (err) {
    console.log(err);
  }
};

//DELETE
// create unsigned transaction
const deleteApp = async (sender, index) => {
  try {
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    let txn = algosdk.makeApplicationDeleteTxn(sender, params, index);

    // sign, send, await
    let txId = txn.txID().toString();

    // Sign the transaction
    let signedTxn = txn.signTxn(creatorAccount.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();

    let appId = transactionResponse["txn"]["txn"].apid;
  } catch (err) {
    console.log(err);
  }
};

//  CLEAR STATE
//  create unsigned transaction
const clearState = async (sender, index) => {
  try {
    let params = await client.getTransactionParams().do();
    params.fee = 1000;
    params.flatFee = true;
    let txn = algosdk.makeApplicationClearStateTxn(sender, params, index);
    let txId = txn.txID().toString();

    // sign, send, await
    let signedTxn = txn.signTxn(userAccout.sk);

    // Submit the transaction
    await client.sendRawTransaction(signedTxn).do();

    // Wait for transaction to be confirmed
    const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);

    // display results
    let transactionResponse = await client
      .pendingTransactionInformation(txId)
      .do();
    let appId = transactionResponse["txn"]["txn"].apid;
  } catch (err) {
    console.log(err);
  }
};

const main = async () => {
  const approval_program = await compileProgram(client, approvalProgram);
  const clear_program = await compileProgram(client, clear_state_program);

  // configure registration and voting period
  let status = await client.status().do();
  let RegBegin = status["last-round"] + 10;
  let RegEnd = RegBegin + 10;
  let VoteBegin = RegEnd + 10;
  let VoteEnd = VoteBegin + 10;
  let Expert_1 = "PJXOOR55YBXXUKSK7LC725XL4CPFHYTYXN3YJ37KGUX44T7ZGKKR4UFMNQ";
  let Expert_2 = "";
  let Expert_3 = "";
  let Expert_4 = "";
  let Expert_5 = "";
  let Org_Address_1 = "";
  let Org_Address_2 = "";
  let Org_Percent_1 = "";
  let Org_Percent_2 = "";

  // create list of bytes for app args
  let appArgs = [];

  appArgs.push(
    new Uint8Array(Buffer.from(intToBytes(RegBegin))),
    new Uint8Array(Buffer.from(intToBytes(RegEnd))),
    new Uint8Array(Buffer.from(intToBytes(VoteBegin))),
    new Uint8Array(Buffer.from(intToBytes(VoteEnd))),

    //Experts
    new Uint8Array(Buffer.from(intToBytes(Expert_1))),
    new Uint8Array(Buffer.from(intToBytes(Expert_2))),
    new Uint8Array(Buffer.from(intToBytes(Expert_3))),
    new Uint8Array(Buffer.from(intToBytes(Expert_4))),
    new Uint8Array(Buffer.from(intToBytes(Expert_5))),

    //Organization Addresses
    new Uint8Array(Buffer.from(intToBytes(Org_Address_1))),
    new Uint8Array(Buffer.from(intToBytes(Org_Address_2))),

    //Organization Allocations
    new Uint8Array(Buffer.from(intToBytes(Org_Percent_1))),
    new Uint8Array(Buffer.from(intToBytes(Org_Percent_2)))
  );

  // create new application
  const appId = await createApp(
    creatorAddress,
    approval_program,
    clear_program,
    localInts,
    localBytes,
    globalInts,
    globalBytes,
    appArgs
  );

  const globalState = await readGlobalState(appId);
  await Optin(userAccout.addr, appId);
  noop(sender, appId);

  //Converting to base64
  const args = [
    Buffer.from("RegBegin", "base64"),
    Buffer.from("RegEnd", "base64"),
    Buffer.from("VoteBegin", "base64"),
    Buffer.from("VoteEnd", "base64"),
    Buffer.from("Creator", "base64"),
    // Buffer.from("choiceA", "base64"),
  ];

  let filteredItems = [];
  globalState.forEach((item) => {
    if (!args.includes(item.key)) {
      filteredItems.push(item);
    }
  });

  await closeOut(sender, appId);
  await deleteApp(creatorAddress, appId);
};
main();
