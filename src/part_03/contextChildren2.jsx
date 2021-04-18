import React from "react";
import { Consumer } from "./ContextApi";


class contextChildren2 extends React.Component {

    render() {
        console.log(Consumer);
        return (

            <Consumer>
                {ContextValue => <h3>{`ContextValue: ${ContextValue}`}</h3>}
            </Consumer>
        );
    }
}
export default contextChildren2;