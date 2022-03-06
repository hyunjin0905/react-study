import {useEffect, useRef, useState} from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Todo from "./실전리액트프로그래밍/part_03/todo";
import {Profile} from "./실전리액트프로그래밍/part_03/UseRefExample";
import {CountBefore} from "./실전리액트프로그래밍/part_03/useMemoBefore";
import {CountAfter} from "./실전리액트프로그래밍/part_03/useMemoAfter";
// react-router-dom 으로 작성한 싱글 페이지 어플리케이션
function App() {
    return (
        <BrowserRouter>
            <div>

                <Link to="/useRef">useRef</Link>
                <br />
                <Link to="/useMemoAfter">useMemoAfter</Link>
                <br />
                <Link to="/useMemoBefore">useMemoBefore</Link>
                <br />
                <Route exact path="/" component={Home}/>
                <Route path="/useRef" component={Profile}/>
                <Route path="/useMemoAfter" component={CountAfter}/>
                <Route path="/useMemoBefore" component={CountBefore}/>
            </div>
        </BrowserRouter>
    )


   function Home({ match }) {
       return (<h2>여기는 홈페이지 입니다 원하는 버튼을 클릭하세요</h2>)
   }
   function Photo({ match }) {
       return(<h2>여기는 page 1</h2> )
   }
}

export default App;