import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="h-screen bg-green-950">
        <div className="h-[90%] flex">
          <Sidebar />
        <Display/>
        </div>
        <Player/>
      </div>
    </>
  );
}

export default App;
