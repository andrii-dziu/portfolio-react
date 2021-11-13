import Content from "./Content/Content";
import Sidebar from "./Sidebar/Sidebar";

function App() {
  return (
    <div className="wrapper">
      <div className="container-wrap">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
