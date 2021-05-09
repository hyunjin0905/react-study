import React, { PureComponent, Component} from "react";



class PureComponentClass extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            StateString: "react",
            StateArrayObj: ["react", {react: "200"}]
        }
    }

    buttonClick = (type) => {
        if (type === "string") {
            this.setState({StateString: "react"})
        } else {
            this.setState({StateArrayObj: ["react", {react: "200"}]})
        }
        console.log(this.state);
    }

    render() {
        console.log("render() 실행")
        return (
            <>
                <button onClick={e => this.buttonClick("string")}> 문자열 변경</button>
                <button onClick={e => this.buttonClick("ArrayObject")}> 객체 배열 변경</button>

            </>
        );
    }
}


class ComponentClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            StateString: "react",
            StateArrayObj: ["react", {react: "200"}]
        }

    }

    buttonClick = (type) => {
        if (type === "string") {
            this.setState({StateString: "react"})
        } else {
            this.setState({StateArrayObj: ["react", {react: "200"}]})
        }
    }

    render() {
        console.log("render() 실행")
        return (
            <>
                <button onClick={e => this.buttonClick("string")}> 문자열 변경</button>
                <button onClick={e => this.buttonClick("ArrayObject")}> 객체 배열 변경</button>

            </>
        );
    }
}


export { PureComponentClass, ComponentClass }