import {useState} from 'react';

function Counts() {
  const [count, setCount] = useState(0);

    return (
        <div >
            <h1>You clicked the button {count} Times</h1>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}

export default Counts