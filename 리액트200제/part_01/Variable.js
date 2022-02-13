import React, { Component } from "react";

class Variable extends Component {
  constructor(props) {
    super();
    this.state = {};
  }

  componentDidMount() {
    var varName = "var hi";
    console.log("varName", varName);
    var varName = "200";
    console.log("varName", varName);
    let letName = "let hi";
    console.log("letName", letName);
    letName = "20000";
    console.log(letName);
    const constName = "const hi";
    console.log(constName);
  }

  render() {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "start React 200!"), /*#__PURE__*/React.createElement("p", null, "css \uC801\uC6A9\uD558\uAE30"));
  }

}

export default Variable;