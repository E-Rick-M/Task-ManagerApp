import { useContext,useState } from "react"
import { TaskContext } from "./Store/store"



export default function TaskForm(){
    const {addTask}=useContext(TaskContext)
    const [task,setTask]=useState({
        title:'',
        description:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!task.title || task.title.trim()==='' || !task.description || task.description.trim()===''){
            return
        }
        addTask(task)
        setTask({title:'',description:''})
    }
    const handleChange=(event,identifier)=>{
        // if(identifier===text){
        //     return 
        // }
        setTask((prevTask)=>({...prevTask,[identifier]:event.target.value}))
    }

    return(
        <form onSubmit={handleSubmit} className="p-4">
            <input type="text" placeholder="Task Title" value={task?.title} onChange={(e)=>{handleChange(e,"title")}} className="w-full p-2 mb-2 border"></input>
            <textarea placeholder="Task Description" value={task?.description} onChange={(e)=>{handleChange(e,"description")}} className="border p-2 w-full mb-2"></textarea>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Task</button>
        </form>
    )
}