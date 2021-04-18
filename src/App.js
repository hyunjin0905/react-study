import ReactRef from "./part_03/ReactRef";
import Curring from "./part_03/Curring";
import ReactHoc from "./part_03/ReactHoc";

function App() {
  return (
    <div>
      <h1>react study</h1>
      <ReactRef/>
      <br/>
      <Curring/>
      <br/>
      <ReactHoc name={"ReactHoc"}/>
    </div>
  );
}

export default App;
