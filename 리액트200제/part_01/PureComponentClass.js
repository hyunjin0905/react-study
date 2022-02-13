import React, { PureComponent, Component } from "react";

class PureComponentClass extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", {
        react: "200"
      }]
    };
  }

  buttonClick = type => {
    if (type === "string") {
      this.setState({
        StateString: "react"
      });
    } else {
      this.setState({
        StateArrayObj: ["react", {
          react: "200"
        }]
      });
    }

    console.log(this.state);
  };

  render() {
    console.log("render() 실행");
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: e => this.buttonClick("string")
    }, " \uBB38\uC790\uC5F4 \uBCC0\uACBD"), /*#__PURE__*/React.createElement("button", {
      onClick: e => this.buttonClick("ArrayObject")
    }, " \uAC1D\uCCB4 \uBC30\uC5F4 \uBCC0\uACBD"));
  }

}

class ComponentClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react",
      StateArrayObj: ["react", {
        react: "200"
      }]
    };
  }

  buttonClick = type => {
    if (type === "string") {
      this.setState({
        StateString: "react"
      });
    } else {
      this.setState({
        StateArrayObj: ["react", {
          react: "200"
        }]
      });
    }
  };

  render() {
    console.log("render() 실행");
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("button", {
      onClick: e => this.buttonClick("string")
    }, " \uBB38\uC790\uC5F4 \uBCC0\uACBD"), /*#__PURE__*/React.createElement("button", {
      onClick: e => this.buttonClick("ArrayObject")
    }, " \uAC1D\uCCB4 \uBC30\uC5F4 \uBCC0\uACBD"));
  }

}

export { PureComponentClass, ComponentClass };