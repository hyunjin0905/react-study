import React, { useEffect, useRef, useState } from "react"

export function Profile() {
    const [ age, setAge ] = useState(20)
    const prevAgeRef = useRef(20)

    useEffect(() => {
        prevAgeRef.current = age
    }, [ age ])
    const prevAge = prevAgeRef.current
    const text = age === prevAge ? "same" : age > prevAge ? "older" : "younger"
    const onHandleClick = () => {
        const age = Math.floor(Math.random() * 50 + 1); setAge(age)
    }
    return (
        <div>
            <p>{` age ${age} is ${text} than age ${prevAge}`}</p>
            <button onClick={onHandleClick}>나이변경</button>
            <p>

            </p>
        </div>
    )
}

