import React from "react";

function PeopleCard(props) {
    return (
        <div>
            <h3>Name: {props.name}</h3>
            <p>DOB: {props.birth}</p>
            <p>Gender: {props.gender}</p>
        </div>
    )
};

export default PeopleCard