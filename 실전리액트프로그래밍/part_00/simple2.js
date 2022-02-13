function LinkButton() {
  const [linked, setLinked] = React.useState();
  const text = linked ? "좋아요 취소" : "좋아요";
  return React.createElement("button", {
    onClick: () => setLinked(!linked)
  }, text);
}

ReactDOM.render(React.createElement(LinkButton), document.querySelector("#react-root1"));
ReactDOM.render(React.createElement(LinkButton), document.querySelector("#react-root2"));
ReactDOM.render(React.createElement(LinkButton), document.querySelector("#react-root3"));