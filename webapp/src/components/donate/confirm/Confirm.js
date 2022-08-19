import "./confirm.css";
import "@fontsource/dm-sans";
import { useFormik } from "formik";
import { React, useState } from "react";
import algosdk from "algosdk";

import algo_icon from "../../../assets/Proposals/algorand_logo_mark_black.png";
import dollar_icon from "../../../assets/Donate/dollar_icon.png";

const preferenceSampleList = [
  {
    name: "Promoting or Protecting Human Rights",
    description: "This purpose covers the advancement of Human Rights",
    icon: "rights",
    assigned: ["Headshot4", "Headshot2", "Headshot3"],
    assigned_link: ["", "", ""],
    proposals: [
      {
        number: "1",
        date: "12/1/2022",
        state: "Completed",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot3", "Headshot2"],
      },
      {
        number: "4",
        date: "12/2/2022",
        state: "Active",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot4", "Headshot2"],
      },
      {
        number: "5",
        date: "12/3/2022",
        state: "Active",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot2", "Headshot3"],
      },
    ],
  },
  {
    name: "Advancing the Natural Environment",
    description:
      "This purpose covers the advancement of the Natural Environment",
    icon: "environment",
    assigned: ["Headshot1", "Headshot2", "Headshot3"],
    assigned_link: ["", "", ""],
    organizations: ["guide_dogs", "peta", "rspca", "wires"],
    proposals: [
      {
        number: "1",
        date: "12/4/2022",
        state: "Completed",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot4", "Headshot1"],
      },
      {
        number: "2",
        date: "12/5/2022",
        state: "Active",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot3", "Headshot4"],
      },
      {
        number: "8",
        date: "12/6/2022",
        state: "Completed",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot1", "Headshot2"],
      },
    ],
  },
  {
    name: "Advancing Education",
    description: "This purpose covers the advancement of Human Rights",
    icon: "education",
    assigned: ["Headshot4", "Headshot1", "Headshot3", "Headshot2"],
    assigned_link: ["", "", ""],
    organizations: ["peta", "wires", "guide_dogs"],
    proposals: [
      {
        number: "7",
        date: "12/7/2022",
        state: "Active",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot2", "Headshot3"],
      },
      {
        number: "2",
        date: "12/8/2022",
        state: "Completed",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot4", "Headshot1"],
      },
      {
        number: "9",
        date: "12/9/2022",
        state: "Active",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot1", "Headshot2"],
      },
    ],
  },
  {
    name: "Advancing Religion",
    description: "This purpose covers the advancement of Human Rights",
    icon: "religion",
    assigned: ["Headshot2", "Headshot1", "Headshot3"],
    assigned_link: ["", "", ""],
    organizations: ["guide_dogs", "wires", "rspca"],
    proposals: [
      {
        number: "4",
        date: "12/10/2022",
        state: "Active",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot4", "Headshot3"],
      },
      {
        number: "9",
        date: "12/11/2022",
        state: "Active",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot2", "Headshot4"],
      },
      {
        number: "2",
        date: "12/12/2022",
        state: "Completed",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot1", "Headshot2"],
      },
    ],
  },
  {
    name: "Relieving The Suffering of Animals",
    description: "This purpose covers the advancement of Human Rights",
    icon: "animal",
    assigned: ["Headshot3", "Headshot2", "Headshot1", "Headshot4"],
    assigned_link: ["", "", ""],
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    proposals: [
      {
        number: "6",
        date: "12/13/2022",
        state: "Active",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot1", "Headshot4"],
      },
      {
        number: "8",
        date: "12/14/2022",
        state: "Completed",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot2", "Headshot1"],
      },
      {
        number: "2",
        date: "12/15/2022",
        state: "Completed",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot3", "Headshot4"],
      },
    ],
  },
  {
    name: "Advancing Healthcare",
    description: "This purpose covers the advancement of Human Rights",
    icon: "healthcare",
    assigned: ["Headshot1", "Headshot3", "Headshot2"],
    assigned_link: ["", "", ""],
    organizations: ["peta", "guide_dogs", "wires", "rspca"],
    proposals: [
      {
        number: "3",
        date: "12/16/2022",
        state: "Completed",
        allocation1: ["wires", "50.0"],
        allocation2: ["rspca", "50.0"],
        panel: ["Headshot2", "Headshot4"],
      },
      {
        number: "6",
        date: "12/17/2022",
        state: "Active",
        allocation1: ["wires", "20.0"],
        allocation2: ["guide_dogs", "80.0"],
        panel: ["Headshot1", "Headshot3"],
      },
      {
        number: "8",
        date: "12/18/2022",
        state: "Active",
        allocation1: ["rspca", "35.0"],
        allocation2: ["guide_dogs", "65.0"],
        panel: ["Headshot2", "Headshot1"],
      },
    ],
  },
];

const Donate = () => {
    const APP_ID = ""

  let client = new algosdk.Algodv2(
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "http://localhost",
    4001
  );

  const Optin = async (sender, index) => {
    try {
      let params = await client.getTransactionParams().do();
      params.fee = 1000;
      params.flatFee = true;

      let txn = algosdk.makeApplicationOptInTxn(sender, params, index);
      // sign, send, await
      // Sign the transaction

      const txn_b64 = await window.AlgoSigner.encoding.msgpackToBase64(
        txn.toByte()
      );

      let signedTxs = await window.AlgoSigner.signTxn([{ txn: txn_b64 }]);
      console.log(signedTxs);

      // Get the base64 encoded signed transaction and convert it to binary
      let binarySignedTx = await window.AlgoSigner.encoding.base64ToMsgpack(
        signedTxs[0].blob
      );

      // Send the transaction through the SDK client
      let txId = await client.sendRawTransaction(binarySignedTx).do();
      console.log(txId);

      // Wait for transaction to be confirmed
      const confirmedTxn = await algosdk.waitForConfirmation(client, txId, 4);
      console.log("confirmed" + confirmedTxn);

      //Get the completed Transaction
      console.log(
        "Transaction " +
          txId +
          " confirmed in round " +
          confirmedTxn["confirmed-round"]
      );
      // display results
      let transactionResponse = await client
        .pendingTransactionInformation(txId)
        .do();
      console.log(
        "Opted-in to app-id:",
        transactionResponse["txn"]["txn"]["apid"]
      );
    } catch (err) {
      console.log(err);
    }
  };

  const register = () => {
    if (userAccount.current === undefined) {
      alert("Connect your wallet");
    } else {
      Optin(userAccount.current[0].address, APP_ID);
    }
  };

  const handleClose = () => {};

  const formik = useFormik({
    initialValues: {
      preference: "",
      type: "",
      amount: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const [currentPreference, setCurrentPreference] = useState(0);
  const [isAlgo, setIsAlgo] = useState(true);

  return (
    <>
      <div className="header">
        <h1 className="headerText">Select a Preference and Donate</h1>
      </div>
      <div className="wrapperBody">
        <div className="preferenceContainer">
          <div className="preferenceGrid">
            {preferenceSampleList.map((preference, index) => (
              <div
                className="preferenceSquareItem"
                key={index}
                onClick={() => setCurrentPreference(index)}
                style={{
                  backgroundColor: currentPreference === index ? "#2425db" : "",
                }}
              >
                <img
                  key={index}
                  alt="icon"
                  className="preferenceIcon"
                  src={require("../../../assets/Donate/" +
                    preference.icon +
                    ".svg")}
                  style={{
                    filter:
                      currentPreference === index
                        ? "invert(100%) sepia(0%) saturate(0%) hue-rotate(250deg) brightness(100%) contrast(100%)"
                        : "",
                  }}
                ></img>
                <p
                  className="smallerText"
                  style={{
                    color: currentPreference === index ? "white" : "",
                  }}
                >
                  {preference.name}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="proposalInfo">
          <div className="proposalInnerText">
            <p className="proposalText">
              {preferenceSampleList[currentPreference].name}
            </p>
            <p className="proposalDetailsText">
              {preferenceSampleList[currentPreference].description}
            </p>
          </div>
          <div className="assignedExperts">
            <p className="proposalText">Assigned Experts:</p>
            {preferenceSampleList[currentPreference].assigned.map(
              (expertURL, index) => (
                <img
                  alt="icon"
                  key={index}
                  className="organizationIcon"
                  src={require("../../../assets/Proposals/Sample headshots/" +
                    expertURL +
                    ".png")}
                ></img>
              )
            )}
          </div>
          <div className="proposalParent">
            <div className="confirmHeader">
              <p className="proposalText">Amount:</p>
              <input
                className="amountInput"
                id="prop_title"
                name="prop_title"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
              />
              <img
                alt="icon"
                className="currIcon"
                src={isAlgo ? algo_icon : dollar_icon}
              ></img>
            </div>
            <div
              className="paymentOption"
              style={{
                backgroundColor: isAlgo ? "#2425db" : "#F7F7F7",
              }}
              onClick={() => setIsAlgo(true)}
            >
              <img alt="icon" className="currIcon" src={algo_icon}></img>
              <p
                className="proposalText"
                style={{
                  color: isAlgo ? "white" : "",
                }}
              >
                Algorand
              </p>
            </div>
            <div
              className="paymentOption"
              style={{
                backgroundColor: !isAlgo ? "#2425db" : "#F7F7F7",
              }}
              onClick={() => setIsAlgo(false)}
            >
              <img alt="icon" className="currIcon" src={dollar_icon}></img>
              <p
                className="proposalText"
                style={{
                  color: !isAlgo ? "white" : "",
                }}
              >
                Credit Card
              </p>
            </div>

            <button type="submit" className="submit">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Donate;
