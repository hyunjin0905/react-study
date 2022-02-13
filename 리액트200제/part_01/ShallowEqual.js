import React, { Component } from "react";
import { shallowEqualArrays } from "shallow-equal";

class ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react"
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState);
    return !shallowEqualArrays(this.state, nextState);
  }

  componentDidMount() {
    const object = {
      react: "200"
    };
    const Array1 = ["react", object];
    const Array2 = ["react", object];
    const Array3 = ["react", {
      "react": "200"
    }];
    console.log('shallowEqualArrays (Array1, Array2)' + shallowEqualArrays(Array1, Array2));
    console.log('shallowEqualArrays (Array2, Array3)' + shallowEqualArrays(Array2, Array3));
    this.setState({
      StateString: "react"
    });
  }

  render() {
    console.log("render 실행");
    return /*#__PURE__*/React.createElement("div", null);
  }

}

export default ShallowEqual;