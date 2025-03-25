import "./App.css";
import SideBar from "./Components/Header/sidebar";
import { TaskProvider } from "./Components/Store/store";
import TaskDetails from "./Components/TaskDetails";
import TaskForm from "./Components/TaskForm";

function App() {
  return (
    <TaskProvider>
    <div className="flex gap-8 h-screen">
       <SideBar/>
       <TaskDetails/>
    </div>
    <TaskForm/>
    </TaskProvider>
  );
}

export default App;
