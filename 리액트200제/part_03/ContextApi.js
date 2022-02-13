import React from "react";
import Children from "./contextChildren";
const {
  Provider,
  Consumer
} = /*#__PURE__*/React.createContext();
export { Consumer };

class ContextApi extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement(Provider, {
      value: "React200"
    }, /*#__PURE__*/React.createElement(Children, null));
  }

}

export default ContextApi;