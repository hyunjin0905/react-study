import React from "react"
import {Route,  BrowserRouter as Router, Switch} from "react-router-dom";
import Todo from "./part_03/todo";

export default function RouterComponent() {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Todo}/>
            </Switch>
        </Router>
    )
}
