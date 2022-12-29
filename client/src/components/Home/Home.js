import React, { useState } from 'react';
import AllPeople from '../AllPeople/AllPeople';
import Overview from '../Overview/Overview';
import { Button, Form } from 'react-bootstrap';
import AddPerson from '../AddPerson/AddPerson';


const Home = (props) => {

    const {
        getAllPersons,
        missingPersons,
        addMissingPerson,
        account,
        setAccount,
    } = props;



    const [error, setError] = useState(null);
    const [searchtxt, setSearchTxt] = useState({});

    const handleWalletConnect = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: 'eth_requestAccounts' }).then(result => {
                accountChangeHandler(result[0]);
            });
        } else {
            setError("Metamask not found")
        }
    }

    const accountChangeHandler = (account) => {
        setAccount(account);
    }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setSearchTxt({ ...searchtxt, [name]: value });
    }
    const searchbydivision = (e) => {
        e.preventDefault();
        getAllPersons(searchtxt.division);
    }


    return (
        <div className="container-fluid">


            <div className="row my-2">

                <div className="col-3">
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            name="division"
                            onChange={handleChange}
                        />
                        <Button onClick={searchbydivision} type="submit" variant="outline-success">Search</Button>
                    </Form>
                </div>
                <div className="col-4"></div>


                <div className="col-2">
                    <AddPerson addMissingPerson={addMissingPerson} />
                </div>
                <div className="col-3">
                    <Button onClick={handleWalletConnect} variant={account ? 'success' : 'primary'} disabled={account ? true : false}>{account ? account : "Connect"}</Button>
                </div>
            </div>






            <div className="row">
                <div className="col-9"><AllPeople missingPersons={missingPersons} /></div>

                <div className="col-3 border border-2 mr-5">
                    <h3 className="text-center">Overview</h3>
                    <Overview getAllPersons={getAllPersons}/>
                </div>
            </div>
        </div>

    );
};

export default Home;