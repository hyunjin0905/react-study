import React, {Component} from "react";



class Variable extends Component {

    constructor(props) {
        super();
        this.state = {}
    }

    componentDidMount() {
        var varName = "var hi"
        console.log("varName", varName);
        var varName = "200"
        console.log("varName", varName);
        let letName = "let hi"
        console.log("letName", letName);
        letName = "20000"
        console.log(letName);
        const constName = "const hi"
        console.log(constName);



    }

    render() {
        return (
            <>
                <h1>start React 200!</h1>
                <p>css 적용하기</p>
            </>
        )
    }
}

export default Variable;