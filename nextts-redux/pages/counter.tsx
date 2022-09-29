import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as counterActions from '../store/modules/counter';

export default function Test() {
    const dispatch = useDispatch();
    const value = useSelector(({ counter }: any) => counter.value);

    const plus = useCallback((value: any) => {
        dispatch(counterActions.increment());
    }, [dispatch]);

    const minus = useCallback((value: any) => {
        dispatch(counterActions.decrement());
    }, [dispatch]);

    return (
        <div>
            <h1>Counter</h1>
            <button onClick={() => minus(1)}>-</button>
            <span>{value}</span>
            <button onClick={() => plus(1)}>+</button>
        </div>
    );
}
