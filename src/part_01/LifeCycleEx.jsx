import React, { Component } from "react"
class LifeCycleEx extends Component {

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    render() {
        return undefined;
    }
}