import React, { Component } from "react"
class LifeCycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log("2 getDerivedStatedFromProps",props.prop_value);
        return { tmp_state: props.prop_value };
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. constructor call');
    }

    componentDidMount() {
        // 가장 마지막 실행됨  render 함수가 return 되는 html 형식의 코드를  화면에 그려준 후 실행한다
        // 이벤트 처리 , 초기화
        console.log('4 componentDidMount Call')
        console.log('5 tmp_state', this.state.tmp_state)
        this.setState({tmp_state2: true})
        var jsString1 = "자바스크립트";
        var jsString2 = "입니다";
        var longString = "es6에 추가된 string 함수들입니다"
        console.log(`${jsString1} 문자열 ${jsString2}`)
        console.log(longString.startsWith("es6에 추가된"));
        console.log(longString.endsWith("함수들입니다"));
        console.log(longString.includes("추가된 string"))
    }

    shouldComponentUpdate(props, state) {
        console.log('6 shouldComponentUpDate Call / tmp_state2 = ' + state.tmp_state2)
        return state.tmp_state2;
    }

    render() {
        console.log('3. render Call')
        return (
            <></>
        );
    }
}

export default LifeCycleEx;