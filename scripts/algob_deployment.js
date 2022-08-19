const { executeTransaction, balanceOf } = require('@algo-builder/algob');

//  a helper function used to create fund transaction
function mkParam(senderAccount, receiverAddr, amount, payFlags) {
    return {
      type: TransactionType.TransferAlgo,
      sign: SignType.SecretKey,
      fromAccount: senderAccount,
      toAccountAddr: receiverAddr,
      amountMicroAlgos: amount,
      payFlags: payFlags
    };
};

//  transfer some algos to creator account
await executeTransaction(deployer, algoTxnParams);