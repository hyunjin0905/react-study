import ReactRef from "./part_03/ReactRef";
import CurringFuc from "./part_03/CurringFuc";
import ReactHoc from "./part_03/ReactHoc";
import ContextApi from "./part_03/ContextApi";
import UpdateContext from "./part_03/UpdateContext";
import SpreadOperator from "./part_01/spread";





function App() {
  return (
    <div>
      <h1>react study</h1>
      <ReactRef/>
      <br/>
      <CurringFuc/>
      <br/>
      <ReactHoc name={"ReactHoc"}/>

        <br/>
     <UpdateContext/>
        <br/>
        <SpreadOperator/>
    </div>
  );
}

export default App;
