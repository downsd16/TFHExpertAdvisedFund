import React, {useRef, useState} from 'react';
import './wallet.css';
import algosdk from 'algosdk';


export default function Header () {
    const defaultString = 'Connect Algosigner'

    let [currentAddress, setCurrentAddress] = useState(defaultString);
    
    let client = new algosdk.Algodv2("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", "http://localhost", 4001)
    let userAccount = useRef()

    const connectAlgoSigner = async () => {
      await window.AlgoSigner.connect()
          getUserAccount()
    }

    const getUserAccount = async () =>{
      userAccount.current =  await window.AlgoSigner.accounts({
           ledger: 'TestNet'
         }).then(
            setCurrentAddress(userAccount.current)
         )

    console.log(userAccount.current[0]['address'])
}

    return (
        <div className='container' onClick={connectAlgoSigner}>
            <div className='walletIcon'
                style={{
                    backgroundColor: (currentAddress === defaultString ? 'red':'green'),
                }}
            ></div>
            <p className='walletAddress'>{currentAddress}</p>
        </div>
    )
}