import "./App.css";
import SideBar from "./Components/Header/sidebar";

function App() {
  return (
    <>
    <div className="w-screen h-screen bg-white flex">
    <SideBar />
    <div className="flex-1 flex justify-center items-center h-screen">
      <h1 className="text-4xl font-bold text-red-500">Hello World</h1>
    </div>
    </div>
        
    </>
  );
}

export default App;
