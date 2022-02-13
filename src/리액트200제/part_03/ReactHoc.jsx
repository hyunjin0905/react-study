import React, { Component } from "react";
import withHocComponent from "./withHocComponent"


class ReactHoc extends Component {

    render() {
        console.log("2. HocComponent render")

        return (
            <>

            </>
        );
    }
}
export default withHocComponent(ReactHoc, "ReactHoc");