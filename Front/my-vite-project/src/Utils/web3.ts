import Web3 from 'web3';

let web3: Web3 | undefined = undefined;

if (typeof window !== 'undefined' && window.ethereum) {
  web3 = new Web3(window.ethereum);
  window.ethereum.request({ method: 'eth_requestAccounts' }).catch((error: Error) => {
    console.error('User denied account access', error);
  });
} else {
  console.error('Please install MetaMask!');
}

export default web3;