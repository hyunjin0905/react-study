import React from "react";
import Children2 from "./contextChildren2";
import { Consumer } from "./UpdateContext";




class contextChildren extends React.Component {
    render() {
        return (
            <Consumer>
                {
                    contextValue =>
                        <button onClick={ e => contextValue.setStateFuc("React200")}>
                            {contextValue.name}__button
                        </button>
                }
            </Consumer>

        )
    }
}

export default contextChildren;