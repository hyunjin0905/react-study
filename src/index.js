import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App3 from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from "redux";
import reducers from "./reducers";
import {Provider} from "react-redux";

import store from "./store/config"

ReactDOM.render(
    <Provider store={store}>
        <App3/>
    </Provider>
    document.getElementById('root')
)

reportWebVitals();
