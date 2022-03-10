import {BrowserRouter, Link, Route} from "react-router-dom";
function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/useRef">useRef</Link>
                <Route exact path="/" component={Home}/>
            </div>
        </BrowserRouter>
    )

}

export default App;