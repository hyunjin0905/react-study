import { useEffect, useState } from "react";
import {BrowserRouter, Link, Route} from "react-router-dom";
import Rooms from "./실전리액트프로그래밍/part_00/Rooms";
// react-router-dom 으로 작성한 싱글 페이지 어플리케이션
function App() {
    return (
        <BrowserRouter>
            <div>
                <Link to="/" >홈</Link>
                <br />
                <Link to="/photo">사진</Link>
                <br />
                <Link to="/rooms">방 소개</Link>
                <br />
                <Route exact path="/" component={Home}/>
                <Route path="/photo" component={Photo}/>
                <Route path="/rooms" component={Rooms}/>
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