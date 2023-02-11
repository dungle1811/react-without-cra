import * as React from 'react';
import { decrement, increment } from './counterSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';

export default function Counter(): React.ReactElement {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button aria-label="Increment" onClick={() => dispatch(increment())}>
        Increment
      </button>
      <span>{count}</span>
      {/* eslint-disable-next-line react/button-has-type */}
      <button aria-label="Decrement" onClick={() => dispatch(decrement())}>
        Decrement
      </button>
    </div>
  );
}
