import { useState } from 'react';
import React from 'react';
import './Count.css';

const Count = () => {
	const [count, setCount] = useState(0);

	const decrease = () => {
		setCount(count-1);
		if (count < 1) {
			setCount(0);
		} 
	};

    const reset = () => {
        setCount(0);
    };

	const remove = () => {
		
	}

	return (
		<div className="app">
			<div className="counter">{count}</div>
            <div className= "even-number" style={(count % 2 === 0 ? {background:'red'} : {background:'white'})}>Введено четное число</div>
            <div className="counter-buttons">
                <button className="counter-btn" onClick={decrease}>-</button>
                <button className="counter-btn" onClick={reset}>Reset</button>
                <button className="counter-btn" onClick={remove}>Delete</button>
                <button className="counter-btn" onClick={()=>setCount(count+1)}>+</button>
            </div>
		</div>
	);
}

export default Count;