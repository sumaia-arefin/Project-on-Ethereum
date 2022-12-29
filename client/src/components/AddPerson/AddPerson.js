import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';


const AddPerson = ({addMissingPerson}) => {
    const [show, setShow] = useState(false);
    const [person, setPerson] = useState({});
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const handleUpdate = (e) => {
        e.preventDefault();
        addMissingPerson(person);
        handleClose();
    }



    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPerson({ ...person, [name]: value });
    }

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add People
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Missing Person Data</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2">Name</Form.Label> <Col sm="10"><Form.Control
                                type="text"
                                placeholder="Missing Person Name"
                                name="name"
                                onChange={handleChange}
                            /> </Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-1">
                            <Form.Label column sm="2" >Age</Form.Label>
                            <Col sm="10">
                                <Form.Control
                                    type="text"
                                    placeholder="Missing Person Age"
                                    autoFocus
                                    name="age"
                                    onChange={handleChange}
                                />
                            </Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" >
                            <Form.Label column sm="2">Height</Form.Label> <Col sm="10"> <Form.Control
                                type="text"
                                placeholder="Missing Person Height"
                                autoFocus
                                name="height"
                                onChange={handleChange}
                            /> </Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" >
                            <Form.Label column sm="2">Description</Form.Label> <Col sm="10">  <Form.Control
                                type="text"
                                placeholder="Missing Person description"
                                autoFocus
                                name="description"
                                onChange={handleChange}
                            /></Col>

                        </Form.Group>
                        <Form.Group as={Row} className="mb-1" >
                            <Form.Label column sm="2">Division</Form.Label> <Col sm="10"> <Form.Control
                                type="text"
                                placeholder="Which division he lost?"
                                autoFocus
                                name="division"
                                onChange={handleChange}
                            /></Col>

                        </Form.Group>
                        <Form.Group className="mb-1" >
                            <Form.Label >Reletives Phone No</Form.Label> <Form.Control
                                type="text"
                                placeholder="Phone No"
                                autoFocus
                                name="rel_num"
                                onChange={handleChange}
                            />

                        </Form.Group>

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleUpdate}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddPerson;