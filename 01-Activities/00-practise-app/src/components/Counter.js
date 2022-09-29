import React, { useState } from 'react';
import CardBody from './CardBody';

// export default exports this function
export default function Counter() {

    // create count state variable
    let [count, setCount] = useState(0);

    // increases count state variable by 1
    const handleIncrement = () => {
        setCount((count + 1));
    };

    // decreases count state variable by 1
    const handleDecrement = () => {
        setCount((count - 1));
    };

    return (
        <div className="card text-center">
            <div className="card-header bg-primary text-white">Click Counter!</div>
            {/* the state variable and the two functions are passed as props*/}
            <CardBody
                count={count}
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
        </div>
     );
}
