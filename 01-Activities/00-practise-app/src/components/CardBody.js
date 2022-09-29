import React from 'react';

// the count state variable and the two incrementing/decrementing functions are passed down as props
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>
    </div>
  );
}

export default CardBody;