const Counter = ({number, onIncrease, onDecrease}) => {
    return (
        <div>
            <h1>{number}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    );
};
Counter.defaultProps = {
    number: 0
}
export  default Counter
