import React, { Component } from "react";



class ArrowFunction extends Component {

    constructor(props) {
        super(props);
        this.state = {
            arrowFuc: "React200",
            num: 3
        }
    }

    componentDidMount() {
        Function1(1);
        this.Function2(1,1);
        this.Function3(1,3)
        this.Function4();
        this.Function5(0,2,3);
        function Function1(num1) {
            console.log("this", this)
            return console.log(num1 +'. Es5 Function');
        }
    }

    Function2 = (num1, num2) => {
        let num3 = num1 + num2;
        console.log(num3+ ". Arrow Function : " + this.state.arrowFuc);
    }

    Function3() {
        var this_bind = this;
        setTimeout(function () {
            console.log(this_bind.state.num + '. Es5 callback function noBind : ');
            console.log(this_bind.state.arrowFuc)
        },100);
    }

    Function4() {
        console.log(this);
        var this_bind = this;
        setTimeout(function () {
            console.log("this", this);
            console.log(this_bind);
            console.log('4. Es5 Callback Function Bind : '+ this_bind.state.arrowFuc);
        },100);
    }

    Function5 = (num1, num2, num3) => {
        const num4 = num1 + num2 + num3;
        setTimeout(() => {
            console.log(this);
            console.log(num4 + 'Arrow Callback Function : ' + this.state.arrowFuc)
        }, 100)

    }

    render() {
        return (
            <h2> [ THIS IS Arrow function]</h2>
        );
    }
}


export default ArrowFunction;