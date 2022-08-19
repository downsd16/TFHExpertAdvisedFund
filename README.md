# TFHExpertAdvisedFund
A DAO created for the 2022 Algorand Greenhouse Hackathon

The TFH Expert Advised Fund utilizes DAO smart contracts to efficiently allocate <br>
donation funds for a given interest. Smart contracts represent 'proposals' that <br>
are voted on by experts chosen by TFH Admins. If the proposal passes (meets minimum <br>
number of votes), the funds are distributed to the target organizations' addresses. <br>

Tokens for Humanity Greenhouse '22 Team:

Frederick Brien (TFH Co-Founder)<br>
Bryce Thomas (TFH Co-Founder)<br>
Devin Downs (Developer)<br>

# Demo Setup
Contracts:
```
npm install
cd scripts
node deployment.js
```

Webapp:
```
cd webapp
npm install
npm run winstart
```
In order to get the JS AlgoSDK working, a custom webpack configuration is required
A custom run script (winstart) has been added for windows machines (prevents sourcemap error) 
