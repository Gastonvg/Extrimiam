import React, { useState } from 'react';
import web3 from '../Utils/web3';

const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Reemplaza con la dirección de tu contrato
const contractABI: any[] = []; // Reemplaza con el ABI de tu contrato

let contract: any; // Declaración de la variable contract

if (web3) {
  contract = new web3.eth.Contract(contractABI, contractAddress);
} else {
  console.error('web3 is not initialized. Please check your setup.');
}

const InputForm = () => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!web3 || !contract) {
      console.error('web3 or contract is not initialized. Cannot send transaction.');
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