
import React from "react";

const HelloDiv = function() {
    const firstName = 'Ishan'
    return (
    <div>
        <h1>Hello! My name is {firstName}</h1>

        <ul>
            <li>Interest 1: Coding</li>
            <li>Interest 2: Exercise</li>
            <li>Interest 3: Meditation</li>
        </ul>
    </div>
    )
}

export default HelloDiv