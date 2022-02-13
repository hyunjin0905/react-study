function LinkButton() {
  const [linked, setLinked] = React.useState();
  const text = linked ? "좋아요 취소" : "좋아요";
  return React.createElement("button", {
    onClick: () => setLinked(!linked)
  }, text);
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(LinkButton), domContainer);