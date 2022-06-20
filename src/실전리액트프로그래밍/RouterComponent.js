import React from "react"
import {Route,  BrowserRouter as Router, Switch} from "react-router-dom";
import Todo from "./part_03/todo";
import Counter from "./part_03/Counter";
import {CounterTodo} from "./part_03/CounterTodo";

export default function RouterComponent() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={CounterTodo}/>
                <Route exact path="/counter" component={Counter}/>
            </Switch>
        </Router>
    )
}
