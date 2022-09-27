
import React from "react";



const firstName = 'Ishan'
const thoughts = 'is pretty cool, lots of files though so that kinda sucks'

export const JSXVariables = function() {
    return (
        <div className="main-container">
            <div className="container">
                <div className="jumbotron">
                    <h1>Hi! My name is {firstName}</h1>
                    <h2>My name has {firstName.length} letters</h2>
                    <h2>I think React {thoughts}</h2>
                </div>
            </div>
        </div>
    )
}