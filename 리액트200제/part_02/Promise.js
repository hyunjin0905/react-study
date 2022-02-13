import React, { Component } from "react";

class PromiseClass extends Component {
  componentDidMount() {
    new Promise(resolve => {
      setTimeout(function () {
        resolve("react");
      }, 1500);
    }).then(function (result) {
      console.log(result);
      return result + 200;
    }).then(function (result) {
      console.log(result);
    });
    new Promise((resolve, reject) => {
      reject(Error("error info"));
    }).then(result => console.log("then " + result)).catch(result => console.log("catch " + result));
  }

  render() {
    return /*#__PURE__*/React.createElement("h1", null, "Promise");
  }

}

export default PromiseClass;