import React from "react";
import { useState } from "react";
import '../../styles/TaskForm.css'
import { v4 as uuidv4 } from 'uuid'

function TaskForm(props) {

  const [ input, setInput ] = useState('')

  const changeHandler = event => {
    setInput(event.target.value)
  }

  const sendHandler = event => {
    event.preventDefault()
    console.log('Sending form...')
    const newTask = {
      id: uuidv4(),
      text: input,
      completed: false
    }
    props.onSubmit(newTask)
  }


  return ( 
    <form action="" className="task-form"
    onSubmit={sendHandler}>
      <input 
      className="task-input"
      placeholder="Write a New Task"
      name="new-task" 
      type="text"
      onChange={changeHandler} />
      <button className="task-button">
        Add Task
      </button>
    </form> 
  )
}

export default TaskForm