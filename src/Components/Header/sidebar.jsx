// import { HomeIcon } from "@heroicons/react/24/solid";
// import { Icon, Settings, Contact, Info } from "lucide-react";

// import { Sidebar } from "lucide-react"

// const Menus = [
//   {
//     name: "Home",
//     Icon: HomeIcon,
//   },
//   {
//     name: "About",
//     Icon: Info,
//   },
//   {
//     name: "Contact",
//     Icon: Contact,
//   },
//   {
//     name: "Settings",
//     Icon: Settings,
//   },
// ];

// export default function SideBar() {
//   return (
//     <div className="w-64 h-full fixed left-0 top-0 bg-gray-800 text-white">
//       <h1 className="text-2xl font-bold text-center mb-15 p-5">Tasks</h1>
//       <ul className="mt-5">
//         {Menus.map((menu, index) => (
//           <li
//             key={index}
//             className="flex justify-between items-center mt-3 p-3 hover:bg-gray-700 p-2 m-1 cursor-pointer"
//           >
//             {/* <div className='w-2'>{menu.Icon}</div> */}
//             <div className="w-3/5 mx-auto flex justfiy-center items-center p-1.5">
//               <div>{<menu.Icon className="w-6 mr-2" size={24} />}</div>
//               <div>{menu.name}</div>
//             </div>
//             {/* <p></p> */}
//             {/* {menu.name} */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
import {useContext} from 'react'
import {TaskContext} from '../Store/store'

export default function Sidebar(){
  const handleAdd=(task)=>{
    setSelectedTask(task)
  }
  const{setSelectedTask,tasks}=useContext(TaskContext)

  const handleAddTask=()=>{
    // setSelectedTask(null)
  }
  return(
    <div className='w-1/4  md:w-72 px-8 py-16 bg-gray-800 text-white h-screen p-4'>
      <div className='flex justify-between items-center'>
        <h2 className='text-lg font-semibold text-center'>Tasks-App</h2>
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      
      <ul>
      {tasks.length==0 && <p className='text-lg p-2'>No Tasks Added!</p>}
      {tasks.length>0 && <div>
       { tasks.map((task)=>(
        <li key={task.id} className='p-2 cursor-pointer hover:bg-gray-600 m-2' onClick={()=>{handleAdd(task)}}>
          {task.title}
        </li>
        ))}
        </div>}
      </ul>
    </div>
  )
}
