import './App.css';
import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import Home from './components/Home/Home';



import MissingDiaries from './contracts/MissingDiaries.json';
const ContractAddress = '0x409b4d6A0eD8B4FACE3c235F2dF72a075566bf9f';







function App() {
  // Use hooks to manage component state
  const [account, setAccount] = useState('');
  const [missingPersons, setMissingPersons] = useState([]);





  // Sets up a new Ethereum provider and returns an interface for interacting with the smart contract
  async function initializeProvider() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(ContractAddress, MissingDiaries.abi, signer);
  }


  // Displays a prompt for the user to select which accounts to connect

  async function requestAccount() {
    const account = await window.ethereum.request({ method: 'eth_requestAccounts' });
    setAccount(account[0]);
  }




  const getAllPersons = async (division = null, show = true) => {

    if (typeof window.ethereum !== 'undefined') {
      const contract = await initializeProvider();

      try {

        if (division) {
          const persons = await contract.getPersonsByDivision(division.toLowerCase());
          setMissingPersons(persons);
        }
        else {
          const persons = await contract.getAllPersons();
          if (show === true) {
            setMissingPersons(persons);
          }
          else {
            return persons;
          }
        }

      } catch (e) {
        console.log("Error on getting all people", e);
      }

    }
  }
  const addMissingPerson = async (person) => {

    const { name, age, height, description, division, rel_num } = person;

    if (typeof window.ethereum !== 'undefined') {
      const contract = await initializeProvider();

      try {

        await contract.addPerson(name, age, height, description, division.toLowerCase(), rel_num);
        contract.on('AddPerson', (_, __) => {
          getAllPersons();
        });

      } catch (e) {
        console.log("Error on adding new people", e);
      }

    }
  }






  useEffect(() => {
    requestAccount();
    getAllPersons();
  }, []);



  return (
    <Home
      setAccount={setAccount} account={account} addMissingPerson={addMissingPerson} missingPersons={missingPersons} getAllPersons={getAllPersons}
    />
  );
}

export default App;