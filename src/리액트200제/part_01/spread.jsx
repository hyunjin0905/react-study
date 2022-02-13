import React, { Component } from "react";



class SpreadOperator extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var varArray1 = ['num1', 'num2'];
        var varArray2 = ['num2', 'num3'];
        var sumVarArr = [varArray1[0], varArray1[1], varArray2[0], varArray2[1]];

        console.log(sumVarArr);

        // es6 arry
        let sumLetArr = [...varArray1, ...varArray2];
        console.log( sumLetArr);

        const [sum1, sum2, ...remain] = sumLetArr;
        console.log(sum1, sum2, remain);


        var varObj1 = { key1: 'val1', key2: 'val2' }
        var varObj2 = { key2: 'new1', key3: 'val3' }


        var sumVarObj = Object.assign({}, varObj1, varObj2)
        console.log(JSON.stringify(sumVarObj));

        // es6 object
        var sumLetObj = {...varObj1, ...varObj2}
        console.log(JSON.stringify(sumLetObj));

        var {key1, key2, ...others} = sumLetObj;
        console.log(key1, key2, others);





    }
    render() {
        return (
            <>
            <h1>this is spread</h1>
            </>
        )
    }
}

export default SpreadOperator;