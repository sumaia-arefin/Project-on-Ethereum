import React from 'react';
import People from './People';

const all = [
    {
        name: "Danial",
        age: 21,
        height: 5,
        description: "Khubi Valo Akta Chele",
        division: "Dhaka",
        rel_num: "01799592387"
    },
    {
        name: "Islam",
        age: 21,
        height: 5,
        description: "Khubi Valo Akta Chele",
        division: "Khulna",
        rel_num: "01799592387"
    },
    {
        name: "Shohardo",
        age: 21,
        height: 5,
        description: "Khubi Valo Akta Chele",
        division: "Dhaka",
        rel_num: "01799592387"
    },

]



const AllPeople = ({missingPersons}) => {
   
    return (

            <div className='border d-flex border-2 p-1 justify-content-evenly align-items-center flex-wrap ' >
                {
                    missingPersons.map(people => {
                        // console.log(people);
                        return <People key={people.id} people={people} />
                    })
                }
                {
                    missingPersons.length ? "":<h2>No Data Available</h2>
                }
            </div>

    );
};

export default AllPeople;