import React from "react";
import { Consumer } from "./ContextApi";

class contextChildren2 extends React.Component {
  render() {
    console.log(Consumer);
    return /*#__PURE__*/React.createElement(Consumer, null, ContextValue => /*#__PURE__*/React.createElement("h3", null, `ContextValue: ${ContextValue}`));
  }

}

export default contextChildren2;