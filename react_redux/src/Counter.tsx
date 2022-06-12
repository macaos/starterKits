import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './store/counter';
import { RootStateType } from './store/index';

const Counter = () => {

    const number = useSelector<RootStateType, number>(state => state.counter.number)
    const dispatch = useDispatch();

    return (
        <div>
            <div>
                {number}
            </div>
            <div>
                <button onClick={() => {
                    dispatch(increase());
                }}>plus</button>
                <button onClick={() => {
                    dispatch(decrease());
                }}>minus</button>
            </div>
        </div>
    );
};

export default Counter;