// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract MissingDiaries {
    event AddPerson(address recipient, uint256 id);

    struct MissingPerson {
        uint256 id;
        string name;
        uint256 age;
        uint256 height;
        string description;
        string division;
        string rel_num;
    }

    MissingPerson[] missingperson_array;

    mapping(string => uint256[]) divisionToPersons;

    function addPerson(
        string memory name,
        uint256 age,
        uint256 height,
        string memory description,
        string memory division,
        string memory rel_num
    ) external {
        uint256 id = missingperson_array.length;

        missingperson_array.push(
            MissingPerson(id, name, age, height, description, division, rel_num)
        );

        divisionToPersons[division].push(id);

        emit AddPerson(msg.sender, id);
    }

    function getPersonsByDivision(string memory division)
        external
        view
        returns (MissingPerson[] memory)
    {
        uint256 len = divisionToPersons[division].length;

        MissingPerson[] memory persons = new MissingPerson[](len);

        for (uint256 i = 0; i < len; i++) {
            uint256 x = divisionToPersons[division][i];
            persons[i] = missingperson_array[x];
        }

        return persons;
    }

    function getAllPersons() external view returns (MissingPerson[] memory) {
        return missingperson_array;
    }
}
