import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { useState } from "react";

import { decrement, increment } from './counterSlice'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
  return (
    <section>
        <p>{count}</p>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>

    </section>
  )
}

export default Counter
