import React, { useState } from "react";
import TaskForm from "../TaskForm";
import Task from "../Task";
import '../../styles/TaskList.css'

function TaskList() {

  const [tasks, setTasks] = useState([])

  const addTask = task => {
    if (task.text.trim()) {
      console.log(task)
      task.text = task.text.trim()
      const currentTask = [task, ...tasks]
      setTasks(currentTask)
    } else {
      alert('Write something to add a Task')
    }
  }

  const deleteTask = id => {
    const taskListUpdated = tasks.filter(task => task.id !== id)
    setTasks(taskListUpdated)
  }

  const completeTask = id => {
    const taskListUpdated = tasks.map(task => {
      if ( task.id === id ){
        task.completed = !task.completed
      }
      return task
    })
    setTasks(taskListUpdated)
  }
      

  return (
    <>
      <TaskForm
        onSubmit={addTask} />
      <div className="task-list-container">
        {
          tasks.map((task) => {
            return (
              <Task
                id={task.id}
                key={task.id}
                text={task.text}
                completed={task.completed}
                completeTask={completeTask}
                deleteTask={deleteTask} />
            )
          })
        }
      </div>
    </>
  )
}

export default TaskList