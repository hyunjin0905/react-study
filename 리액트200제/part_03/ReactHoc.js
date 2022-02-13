import React, { Component } from "react";
import withHocComponent from "./withHocComponent";

class ReactHoc extends Component {
  render() {
    console.log("2. HocComponent render");
    return /*#__PURE__*/React.createElement(React.Fragment, null);
  }

}

export default withHocComponent(ReactHoc, "ReactHoc");