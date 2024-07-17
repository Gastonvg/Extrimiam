import React, { useState } from 'react';
import web3 from '../Utils/web3';

const contractAddress = 'YOUR_CONTRACT_ADDRESS';
const contractABI = [
  // ABI of the contract
];

let contract: any; // Declare contract variable

if (web3) {
  contract = new web3.eth.Contract(contractABI, contractAddress);
} else {
  console.error('web3 is not initialized. Please check your setup.');
}

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!web3) {
      console.error('web3 is not initialized. Cannot send transaction.');
      return;
    }
    const accounts = await web3.eth.getAccounts();
    await contract.methods.storeData(inputValue).send({ from: accounts[0] });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter data"
      />
      <button type="submit">Send to Blockchain</button>
    </form>
  );
};

export default InputForm;