import React from "react";
import Children2 from "./contextChildren2";
import { Consumer } from "./UpdateContext";

class contextChildren extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Consumer, null, contextValue => /*#__PURE__*/React.createElement("button", {
      onClick: e => contextValue.setStateFuc("React200")
    }, contextValue.name, "__button"));
  }

}

export default contextChildren;