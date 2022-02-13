import React, { useRef, forwardRef, useImperativeHandle } from "react";
import { Input } from "reactstrap"; // A 컴포넌트에서 다른 컴포넌트 내부에 있는 HTML 엘리먼트 직접접근 해야할 경우

const ForwardRef = () => {
  return /*#__PURE__*/React.createElement(FieldOfContainer, null);
};

export default ForwardRef;

const FieldOfContainer = () => {
  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  const InputOfContainer = /*#__PURE__*/forwardRef((props, ref) => {
    // 부모가 자신에게 ref object 넘겼는지 알수 없음
    // 넘기지 않으면 null 로 에러 남
    // setState 로 초기화 방법도 있지만
    // -> useImperativeHandle  로 전딸된 메서드에만 적근 가능 컴포넌트간의 독립성 보장
    console.log(props);
    console.log(ref);
    const inputRef = useRef(null);
    useImperativeHandle(ref, () => ({
      getValue() {
        return inputRef.current.value;
      }

    }), [inputRef]);
    return /*#__PURE__*/React.createElement("input", {
      type: "text",
      ref: ref
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(InputOfContainer, {
    ref: inputRef
  }), /*#__PURE__*/React.createElement("button", {
    onClick: handleFocus
  }, "\uC785\uB825\uD3EC\uCEE4\uC2A4"));
};