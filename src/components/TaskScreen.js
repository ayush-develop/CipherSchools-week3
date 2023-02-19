// import React, { useEffect, useState} from "react";
// import {getAllTasks,tasks} from "../apis/testApi";

// const TaskScreen = () => {
// const [allTasks, setAllTasks] = useState([]); 
//  const [count, setCount] = useState(0);
//     // useEffect (() => {
//     //     console.log("TaskScreen Mounted");
//     // },[]);

//     useEffect (() => {
//         console.log("TaskScreen Mounted");
//         getAllTasks().this((foundTasks) => setAllTasks (foundTasks));
//     }, );

//     // useEffect (() => {
//     //     console.log("TaskScreen Updated");
//     //     setCount(5)
//     // });
//     return tasks.map((task, index) => (
//         <div key={index} 
//         onClick={(e)=>{
//             console.log("Clicked");
//             setCount(count + 1);
//         }}
//         >
//             <h1>
//                 {task.taskNumber} {task.taskName}
//             </h1>
//             <p>{task.taskDescription}</p>
//         </div>
//     ));
// };


// export default TaskScreen;