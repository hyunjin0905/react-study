import React, { Component } from "react"
import axios from "axios";



class Fetch extends Component {

    constructor() {
        super();
    }

    componentDidMount = async () => {
        axios.get("http://date.jsontest.com/").then((response) => console.log(response.data.date))
        axios.post("http://date.jsontest.com/", {a: "react", b:200}).then((response) => console.log(response))
    }

    render() {
        return(<>axios.get</>);
    }


}

export default Fetch;