import React, { Component } from "react";




class ForEachAndMap extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        var For_Arr = [3, 2, 8, 8];
        var For_newArr = [];


        for (var i = 0; i < For_Arr.length; i++) {
            For_newArr.push(For_Arr[i]);
        }

        console.log("1. For_newArr + ["+ For_newArr +"]");

        var ForEach_Arr = [3, 3, 9, 8];
        var ForEach_newArr = [];
        ForEach_Arr.forEach(result => ForEach_newArr.push(result));

        console.log("2. ForEach_newArr : ["+ ForEach_newArr +"]" );


        var Map_Arr = [3, 2, 8, 8];
        let Map_NewArr = Map_Arr.map(result => result * 2);
        console.log("1. Map_newArr : ["+ Map_NewArr +"]" )

        var objArray = [
            {key: "react", value: "200"},
            {key: "react1", value: "2001"},
            {key: "react2", value: "2002"}
        ]
        let Map_objArr = objArray.map(result => {
            var obj = {}
            console.log(result.key)
            obj[result.key] = result.value;
            return obj;
        })

        console.log(JSON.stringify(Map_objArr));

    }

    render() {
        return (
            <>

            </>
        );
    }


}

export default ForEachAndMap;
