import React, { useRef, forwardRef } from "react";
import {Input} from "reactstrap";



// A 컴포넌트에서 다른 컴포넌트 내부에 있는 HTML 엘리먼트 직접접근 해야할 경우
const ForwardRef = () => {

    return (
        <FieldOfContainer/>
    )
}

export default ForwardRef


const FieldOfContainer = () => {
    const inputRef = useRef(null);
    function handleFocus () {
        inputRef.current.focus()
    }
    const InputOfContainer = forwardRef((props, ref) => {
        console.log(props);
        console.log(ref);
        return (
            <input type="text" ref={ref} />
        )

    })

    return (
        <>
            <InputOfContainer ref={inputRef} />
            <button onClick={handleFocus}>입력포커스</button>
        </>
    )
}

