const fs = require("fs");
const algosdk = require("algosdk");

const creatorMnemonic = "veteran piano document defense crash laptop family retire digital clip laugh theme science acquire account interest capital similar reject bleak scorpion promote nest about slab";
const creatorAccount = algosdk.mnemonicToSecretKey(creatorMnemonic);
const creatorAddress = creatorAccount.addr;

// Connect client
algod_address = "http://localhost";
algod_token = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
port = 4001;


async function checkBalance() {
    try {
        let client = new algosdk.Algodv2(algod_token, algod_address, port);
        let accountInfo = await client.accountInformation(creatorAccount.addr).do();
            console.log("Account balance: %d microAlgos", accountInfo.amount);
    } catch(e) {
        console.log(e)
    }
    
}

checkBalance()