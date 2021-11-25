import { useState } from 'react';
import React from 'react';
import Count from './Count';
import './Count.css';

const App = () => {
    const [arr, setArr] = useState([]);
    const [counters, setCounters] = useState(0);
    const [value, setValue] = useState(0);

    const result = arr.map((index) => {
      return <div key={index}><Count/></div>;
    });

    console.log(result)
    
  function add() {
    setCounters(counters + 1);
    setArr([...arr, counters]);
    setValue(value)
  }  
  
  const reset = () => {
    setCounters(0);
    setArr([]);
    setValue(0);
};


	return (
        
		<div className="counters">
            <div className="counter">number: {counters}</div>
            <div className="counter">sum: {value}</div>
            <div>
                <button className="counter-btn" onClick={add}>Add Count</button>
			    <button className="counter-btn" onClick={reset}>Reset</button>
            </div>
            {result}
		</div>
	);
}

export default App;