function LinkButton() {
    const [linked, setLinked] = React.useState()
    const text = linked ? "좋아요 취소" : "좋아요";
    return React.createElement("button", {onClick: () => setLinked(!linked)}, text)
}

function Container() {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <LinkButton/>
            <div>
                <span>현재카운트 :</span>
                <span>{count}</span>
                <button onClick={() => setCount(count + 1)}>증가</button>
                <button onClick={() => setCount(count - 1)}>감소</button>
            </div>
        </div>
    )
}

const domContainer = document.querySelector("#react-root");
ReactDOM.render(React.createElement(Container), domContainer)