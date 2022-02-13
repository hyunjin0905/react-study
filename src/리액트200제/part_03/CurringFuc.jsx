import React, { Component} from "react";




export default class CurringFuc extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    plusNumOrString(a, b) {
        return a + b;
    }

    plusFunc1 = (a) => {
        return function (b) { return this.plusNumOrString(a, b) }.bind(this);
    }

    plusFunc3 = (a) => {
        return function (b) {
            return a + b
        }
    }

    plusFunc2 = a => b => this.plusNumOrString(a, b)

    plusFunc = (a) => {
        return this.plusFunc3(a)(200)

    }

    render() {
        return (
            <>
                <input type="button" value="NumberPlus" onClick={e => alert(this.plusFunc(100))}/>
                <input type="button" value="StringPlus" onClick={e => alert(this.plusFunc("react"))}/>
            </>
        )
    }
}

