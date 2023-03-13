import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { decrement, increment, reset, incrementByAmount } from './counterSlice'

import { useState } from 'react';



const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const [incrementAmount, setIncrement] = useState(0);

    const addValue = Number(incrementAmount) || 0;

    const resetAll = () => {  
        dispatch(reset());
        setIncrement(0);
    };

  return (
    <section>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
        <br/>
        <br/>

        <input type="number" value={incrementAmount} onChange={(e) => setIncrement(e.target.value)} />
        <button onClick={() => dispatch(incrementByAmount(addValue))}>Add</button>

        <br/>
        <br/>

        <button onClick={resetAll}>Reset</button>

    </section>
  )
}

export default Counter
