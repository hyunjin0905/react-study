import React, { Component } from "react";




class CallbackFuc extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        this.logPrint(1, function (return1) {
         console.log("return1 : " + return1)
            this.logPrint(return1, function (return2) {
                console.log("return2 : " + return2);
            })
        }.bind(this))
    }

    logPrint(param, callback) {
        console.log("logPrint Param:" + param);
        param += param;
        callback(param);
    }

    render() {

        return <></>
    }
}

export default CallbackFuc;