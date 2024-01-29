import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = (props) => {
  const [tasks] = useState(props.sampleData);

  console.log("===> tasks", tasks);
  return (
    <div className="container">
      <div>
        {tasks.map((task) => {
          return (
            <div className="card">
              <p className="title">{task.title}</p>
              <p className="status">
                {task.completed ? "- Completed": "- Not completed"}
              </p>
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button>Add Task</button>
      </div>
    </div>
  );
};

export default ToDoList;
