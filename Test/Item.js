import React from "react";

const Item = () => {
  const buttonList = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
  console.log(convert(buttonList));
  return /*#__PURE__*/React.createElement(React.Fragment, null, convert(buttonList).map((data, index) => {
    return /*#__PURE__*/React.createElement("div", {
      key: index,
      style: {
        display: "flex"
      }
    }, data.map((a, idx) => {
      return /*#__PURE__*/React.createElement("div", {
        key: idx
      }, a);
    }));
  }));
};

const convert = lists => {
  const buttonList = [];

  for (let i = 0; i < lists.length; i += 3) {
    buttonList.push(lists.slice(i, i + 3));
  }

  return buttonList;
};

export default Item;