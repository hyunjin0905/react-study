import React from "react";
import Children from "./contextChildren";
const {
  Provider,
  Consumer
} = /*#__PURE__*/React.createContext();
export { Consumer };

class UpdateContext extends React.Component {
  constructor(props) {
    super(props);
    this.setStateFuc = this.setStateFuc.bind(this);
  }

  setStateFuc = value => {
    this.setState({
      name: value
    });
  };

  render() {
    const content = { ...this.state,
      setStateFuc: this.setStateFuc
    };
    return /*#__PURE__*/React.createElement(Provider, {
      value: content
    }, /*#__PURE__*/React.createElement(Children, null));
  }

}

export default UpdateContext;