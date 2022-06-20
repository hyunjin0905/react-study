import Counter from "./Counter";
import Todo from "./todo";

export function CounterTodo () {
    return(
        <div style={{display: "flex", justifyContent: "space-around"}}>
            <Todo/>
            <Counter/>
        </div>
    )
}

