import React, { Component } from "react";
export default function withHocComponent(InComponent, InComponentName) {
  return class OutComponent extends React.Component {
    componentDidMount() {
      console.log(`3. InComponentName: `, InComponentName);
    }

    render() {
      console.log(`1. InComponent render`);
      return /*#__PURE__*/React.createElement(InComponent, this.props);
    }

  };
}