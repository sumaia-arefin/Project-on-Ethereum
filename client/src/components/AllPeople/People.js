import React from 'react';
import Card from 'react-bootstrap/Card';

const People = ({ people }) => {
    const { name, age, height, description, division, rel_num } = people;
    return (
        // <div className='border p-1'>
        //   
        //     <h5> Relatives' Number : {rel_num}</h5>
        // </div>
        <Card className="m-1 " style={{ width: '12rem' }}>
            <Card.Body>
                <Card.Title>{name}({age.toNumber()}) {height.toNumber()}"</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{division}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                    {rel_num}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default People;