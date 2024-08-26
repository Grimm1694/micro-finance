"use client";

import { useState } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import contractABI from "../utils/DecentralisedMicrofinance.json"; // Ensure ABI is available
import contractAddress from "../utils/contactaddress"; // Ensure address is defined

const Microfinance = () => {
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [account, setAccount] = useState<string | null>(null);
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [country, setCountry] = useState<string>("");

  const connectWallet = async () => {
    try {
      const providerOptions = {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "24558c0380ce4171a857a5e2ac37dd95", 
          },
        },
      };

      const web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });

      // Connect to wallet
      const instance = await web3Modal.connect();

      // Wrap with ethers.js provider
      const ethersProvider = new ethers.BrowserProvider(instance);
      setProvider(ethersProvider);

      const signer = await ethersProvider.getSigner();
      const userAccount = await signer.getAddress();
      setAccount(userAccount);

      console.log("Wallet connected:", userAccount);

      // Initialize the contract
      const contractInstance = new ethers.Contract(
        contractAddress,
        contractABI,
        signer
      );
      setContract(contractInstance);

      // Whitelist the user after connecting the wallet
      await checkAndWhitelistUser(userAccount, contractInstance);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    }
  };

  const checkAndWhitelistUser = async (userAddress: string, contractInstance: ethers.Contract) => {
    if (!contractInstance) return;
  
    try {
      console.log("Contract Address:", contractInstance.address);
      console.log("Checking if user is whitelisted...");

      const isWhitelisted = await contractInstance.isUserWhitelisted(userAddress);
      if (isWhitelisted) {
        alert("User is already whitelisted.");
        return;
      }
      // If not whitelisted, proceed to whitelist the user
      console.log("Whitelisting user...");
      const tx = await contractInstance.whitelistUser(userAddress);
      await tx.wait();
      console.log("User whitelisted successfully:", userAddress);
      alert("User whitelisted successfully");
    } catch (error) {
      console.error("Error checking or whitelisting user:", error);
      if ((error as Error).message.includes("could not decode result data")) {
        alert("There was an error decoding the contract result. Please check the contract ABI and function signatures.");
      } else if ((error as any).code === -32603) {
        alert("Error: Request exceeded usage limits. Please check your RPC provider's plan.");
      } else {
        alert("An unexpected error occurred. Please check the console for more details.");
      }
    }
  };
  
  

  const handleCardSubmit = () => {
    if (name && age && country) {
      console.log("User details:", { name, age, country });
      connectWallet(); // Connect wallet after collecting user details
    } else {
      alert("Please fill in all the details");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Decentralized Microfinance</h1>

      {!account && (
        <button
          onClick={() => setIsCardVisible(true)}
          className="bg-blue-500 text-white p-2 mt-2 rounded"
        >
          Connect Wallet
        </button>
      )}

      {isCardVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-semibold mb-4">User Details</h2>
            <input
              type="text"
              placeholder="Name"
              className="border p-2 mb-2 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="number"
              placeholder="Age"
              className="border p-2 mb-2 w-full"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
            />
            <input
              type="text"
              placeholder="Country"
              className="border p-2 mb-2 w-full"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
            <button
              onClick={handleCardSubmit}
              className="bg-green-500 text-white p-2 mt-4 rounded w-full"
            >
              Connect Wallet & Whitelist
            </button>
          </div>
        </div>
      )}

      {account && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Connected Account</h2>
          <p>{account}</p>
        </div>
      )}
    </div>
  );
};

export default Microfinance;
