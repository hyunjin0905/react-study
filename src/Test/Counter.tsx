import { useAppDispatch, useAppSelector } from "../store/config";
import { setCounter } from "../store/slices/counterSlice";
import React, { useCallback, useMemo, useState } from "react";

function Counter() {
    const { value } = useAppSelector(state => state.counter);
    const dispatch = useAppDispatch()
    const [data, setData] = useState<string>()

    function onIncrease () {
        console.log(1111)
        dispatch(setCounter(value + 1))
    }
    function onDecrease()  {
        console.log(1111)
        dispatch(setCounter(value - 1))
    }

    const onData = useCallback(() => {
        setData("g")
    }, [])

    return (
        <>
            <h1>{value}</h1>
            <div>{data}</div>
            <button onClick={onDecrease}>-</button>
            <button onClick={onIncrease}>+</button>
            <DataComp onData={onData}></DataComp>
        </>
    )
}
interface DataComponentProps {
    onData: () => void
}

function DataComponent({onData}: DataComponentProps) {
    console.log(123123123)
    return (
        <>asdf</>
    )
}

const DataComp = React.memo(DataComponent)
export default Counter
