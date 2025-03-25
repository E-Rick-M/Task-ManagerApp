import {useContext} from 'react'
import {TaskContext} from './Store/store'
import TaskForm from './TaskForm'
export default function TaskDetails(){
   const {selectedtask}= useContext(TaskContext)

   if(!selectedtask){
    return<div className='w-2/3 mt-24 text-center'>
        NO Projects Added Maybe Add One?
        <TaskForm/>
    </div>
   }
    return(
        <div className='w-[35rem] p-2 flex justify-evenly mt-8'>
            <h2 className='font-bold '>{selectedtask.title}</h2>
            <p className='text-gray-600 '>{selectedtask.description}</p>
        </div>
    )
}