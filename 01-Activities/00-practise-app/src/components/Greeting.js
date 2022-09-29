
import React, { useState } from 'react';

function Greeting() {
  // Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  const [greeting, setGreeting] = useState('Welcome the following students to class!')

  // Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  const [group, setGroup] = useState(['John', 'Grace', 'Jared'])

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting}</p>
        <ul>
          {/* Fix the list below so that each member of your group is accessed from the `group` array */}
          {
            group.map(element => <li>{element}</li>)
          }
        </ul>
      </div>
    </div>
  );
}

export default Greeting;
