import React from 'react';
import './App.css';
import {Content} from "./components/Content";
import {TheInstructions} from "./components/Instructions";
import { useWallet } from "./context/WalletProvider";
import {shorten} from "./utils";

function App() {

  const wallet = useWallet();


  return (
    <div className="App">
      <h1>Your Wallet</h1>
      <button onClick={wallet.isAuthenticated ? wallet.disconnectWallet : wallet.connectWallet} id="wallet-connect">
        {wallet.isAuthenticated ? `Disconnect ${shorten(wallet.account)}`: "Connect Wallet"}
      </button>
      <div>
        {wallet.isAuthenticated ? <Content chainId={Number(wallet.chainId)} address={wallet.account} /> : ""}
        {!wallet.isAuthenticated ? <TheInstructions /> : ""}
      </div>
    </div>
  );
}

export default App;
