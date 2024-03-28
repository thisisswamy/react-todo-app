import React from 'react'
import './counter.scss'
function Counter({task,serialNumber,deleteTask}:any) {

  const removeTaskInChild =()=>{
    deleteTask(task)
  }
  return (
    <div className="card">
      <div className="note-text">
        {serialNumber +". " + task}
      </div>
      <div className="rm-icon">
        <span onClick={removeTaskInChild}>x</span>
      </div>
    </div>
  )
}

export default Counter