import React, { Component } from "react";

class ReactRef extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        console.log("1, constructor Call")
        this.inputRef = React.createRef();
    }

    RefFocus = (e) => {
        this.inputRef.current.focus();
    }

    JavascriptFocus = () => {
        document.getElementById("id").focus();
    }


    render() {
        console.log("3, render Call")
        return (
            <>
                <input id ="id" type="text" ref={this.inputRef} />
                <input type="button" value="RefFocus" onClick={this.RefFocus}/>
                <input type="button" value="JavascriptFocus" onClick={this.JavascriptFocus}/>
            </>
        )
    }
}

export default ReactRef;