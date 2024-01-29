import React, { useState } from "react";
import "./ToDoList.css";
import AddTask from "./AddTask/AddTask";

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(props.sampleData);
  const [visible, setVisible] = useState(false);

  const addNewtask = (newTask) => {
    console.log("===> called", newTask)
    const newTasks = [...tasks, { title: newTask, completed: false }];
    setTasks(newTasks)
  }

  return (
    <div className="container">
      <div>
        {tasks.map((task, i) => {
          return (
            <div className="card" key={i}>
              <p className="title">{task.title}</p>
              <p className="status">
                {task.completed ? "- Completed": "- Not completed"}
              </p>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setVisible(true)}>Add Task</button>
      </div>
      <AddTask visible={visible} setVisible={setVisible} addNewtask={addNewtask}/>
    </div>
  );
};

export default ToDoList;
