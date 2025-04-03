import "./App.css";
import SideBar from "./Components/Header/sidebar";
import { TaskProvider } from "./Components/Store/store";
import TaskDetails from "./Components/TaskDetails";
import TaskForm from "./Components/TaskForm";
import {useContext} from "react"
import {TaskContext} from "./Components/Store/store"
function App() {
  const {selectedtask}=useContext(TaskContext)
  console.log(selectedtask)

  let content
  if(selectedtask){
    content=<TaskForm/>
  }else {
    content=<TaskDetails/>
  }
  return (
    <TaskProvider>
    <div className="flex gap-8 h-screen">
       <SideBar/>
       {content}
    </div>
    </TaskProvider>
  );
}

export default App;
