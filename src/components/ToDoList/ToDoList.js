import React, { useState } from "react";
import "./ToDoList.css";
import AddTask from "./AddTask/AddTask";

const ToDoList = (props) => {
  const [tasks, setTasks] = useState(props.sampleData);
  const [visible, setVisible] = useState(false);

  const addNewtask = (newTask) => {
    const newTasks = [...tasks, { title: newTask, completed: false }];
    setTasks(newTasks);
  };

  const markAsCompleteOrIncomplete = (index) => {
    let updatedTasks = [...tasks];
    if (updatedTasks[index].completed) {
      updatedTasks[index].completed = false;
    } else {
      updatedTasks[index].completed = true;
    }
    setTasks(updatedTasks);
  };

  return (
    <div>
      <div className="container">
        {tasks.map((task, i) => {
          return (
            <div className="card-container" key={i}>
              <div className="card">
                <p className="title">{task.title}</p>
                <p className="status">
                  {task.completed ? "- Completed" : "- Not completed"}
                </p>
              </div>
              {!task.completed && (
                <button
                  className="markCompleteButton"
                  onClick={() => markAsCompleteOrIncomplete(i)}
                >
                  Mark as Complete
                </button>
              )}
              {task.completed && (
                <button
                  className="markCompleteButton"
                  onClick={() => markAsCompleteOrIncomplete(i)}
                >
                  Mark as Incomplete
                </button>
              )}
            </div>
          );
        })}
      </div>
      <div className="buttonContainer">
        <button onClick={() => setVisible(true)}>Add Task</button>
      </div>
      <AddTask
        visible={visible}
        setVisible={setVisible}
        addNewtask={addNewtask}
      />
    </div>
  );
};

export default ToDoList;
