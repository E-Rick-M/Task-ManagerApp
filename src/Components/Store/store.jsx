import {createContext,useState} from 'react'

const NewTaskDummy=[
    {
        id:'1',
        title:'Learn React',
        description:'Learn React version 19'
    }
]

export const TaskContext=createContext({
    tasks:[],
    selectedtask:null,
    setSelectedTask:null,
    addTask:()=>{},
    editTask:()=>{},
    deleteTask:()=>{}
})

export const TaskProvider=({children})=>{
    const [tasks,setTasks]=useState(NewTaskDummy)
    const [selectedtask,setSelectedTask]=useState(undefined)

    const addTask=(task)=>{
        const newTask={
            id:Date.now(),
            title:task.title,
            description:task.description
        }
        setTasks(prevTasks=>{
            return [...prevTasks,newTask]
        })
    }

    const editTask=(id,updatedTask)=>{
        const seletectedTaskIndex=tasks.findIndex(task=>(task.id==id))
        setTasks((prevTasks=>([...prevTasks,prevTasks[seletectedTaskIndex]={...updatedTask}])))

    }

    const deleteTask=(id)=>{
        setTasks(tasks.filter((task)=>(task.id !== id)))
    }

    const value={
        selectedtask,
        setSelectedTask,
        tasks,
        addTask,
        editTask,
        deleteTask
    }


return(
    <TaskContext.Provider value={value}>
        {children}
    </TaskContext.Provider>
)
}