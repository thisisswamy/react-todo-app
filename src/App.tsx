import React, { useState } from 'react';
import './App.css';
import Counter from './components/counter';

function App() {

  const [taskName, setTaskName] =useState("");
  const [taskList, setTaskList] =useState<any>([])

  const addTask =()=>{
    setTaskList((prev:any)=>[...prev, taskName]);
    setTaskName("")    
  }
  const updateTaskName =(e:any)=>{
    const data = e.target.value;
    setTaskName(prev=>data);
  }
  const removeTask =(rmTask:string)=>{
    const taskAfterRemoval = taskList.filter((task:string)=> task.toLocaleLowerCase() !== rmTask.toLocaleLowerCase());
    setTaskList((prev:any) => [...taskAfterRemoval])
  }

  return (
    <div className="container">
      <div className="main-content">
        <div className="title">
          <h3>Todo App</h3>
        </div>
        <div className="add-input">
          <input type="text" placeholder='Enter Task..'
          value={taskName}
          onChange={updateTaskName}
          />
          <button onClick={addTask}>Add</button>
        </div>
        
        <div className="list-container">
         
         {
          taskList.length>0 ? taskList.map((task:any,index:number)=><Counter task ={task} serialNumber ={index+1}  deleteTask ={removeTask} key={task+"-"+index} />) :<p>no task ! add new  task</p>
         }
        </div>
      </div>
    </div>
   
  );
}

export default App;
