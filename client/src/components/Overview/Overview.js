import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { makesorted } from '../../hooks/makesorted';

const Overview = ({ getAllPersons }) => {

    const [person, setPerson] = useState([]);
    const [sortedDiv, setSortedDiv] = useState([]);

    


    useEffect(() => {
        getAllPersons(null, false).then(p => {
            setPerson(p);
        });
    }, [getAllPersons])

    useEffect(() => {
        let divlist = {}
        person.map(p => {
            if (!divlist[p.division]) {
                divlist[p.division] = 1
            }
            else {
                divlist[p.division] += 1;
            }
        });

        setSortedDiv(makesorted(divlist));
    }, [person]);




    var m;
    if (sortedDiv.length) {
        if (sortedDiv.length % 2 !== 0) {
            const f = (sortedDiv.length + 1) / 2;

            m = sortedDiv[f-1][1];
        }
        else {
            const f = (sortedDiv.length / 2);
            m = (sortedDiv[f][1] + sortedDiv[f - 1][1]) / 2;
        }
    }



    return (
        <>
            <ListGroup as="ol" numbered>
                {
                    sortedDiv.map(division => {
                        return <ListGroup.Item key={division[0]} className='my-1 border' as="li">{division[0]} , Total : {division[1]}</ListGroup.Item>
                    })
                }
            </ListGroup>

            <h5 className="text-center">Median = [{m}]</h5>
        </>

    );
};

export default Overview;