import React from "react";
import { ComponentClass } from "../리액트200제/part_01/PureComponentClass";
import ShallowEqual from "../리액트200제/part_01/ShallowEqual";
import SpreadOperator from "../리액트200제/part_01/spread";
import { Flow } from "./flow";

const Page = () => {
  return /*#__PURE__*/React.createElement(Flow, null, /*#__PURE__*/React.createElement(ComponentClass, null), /*#__PURE__*/React.createElement(ShallowEqual, null), /*#__PURE__*/React.createElement(SpreadOperator, null));
};

export default Page;