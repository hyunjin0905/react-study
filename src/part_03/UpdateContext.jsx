import React from "react";
import Children from "./contextChildren";


const { Provider, Consumer } = React.createContext();
export { Consumer }

class UpdateContext extends React.Component {
    constructor(props) {
        super(props);
        this.setStateFuc = this.setStateFuc.bind(this);
    }

    setStateFuc = (value) => {
        this.setState({ name: value });
    }

    render() {
        const content = {
            ...this.state, setStateFuc: this.setStateFuc
        }
        return (
            <Provider value={content}>
                <Children />
            </Provider>
        );
    }
}

export default  UpdateContext;

