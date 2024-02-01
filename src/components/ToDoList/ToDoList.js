import React, { useContext, useState } from "react";
import "./ToDoList.css";
import AddTask from "./AddTask/AddTask";
import { useNavigate } from "react-router-dom";
import { TaskContext } from "../../TaskContext";

const ToDoList = (props) => {
  const navigate = useNavigate();
  const taskData = useContext(TaskContext);
  const [tasks, setTasks] = useState(props.sampleData);
  const [visible, setVisible] = useState(false);
  const [filterTask, setFilterTask] = useState("All");
  const [filterPriority, setFilterPriority] = useState("All");
  const [allTasks, setAllTasks] = useState();

  let count = 0;

  const addNewtask = (newTask) => {
    const newTasks = [
      ...tasks,
      {
        title: newTask.title,
        description: newTask.description,
        completed: newTask.completed,
      },
    ];
    setTasks(newTasks);
    taskData.setTaskList([...newTasks]);
  };

  function handleClick(i) {
    navigate(`/editTask/${i}`);
  }

  const markAsCompleteOrIncomplete = (index) => {
    let updatedTasks = [...tasks];
    if (updatedTasks[index].completed) {
      updatedTasks[index].completed = false;
    } else {
      updatedTasks[index].completed = true;
    }
    setTasks(updatedTasks);
  };

  const calculateCompletedTask = () => {
    count = 0;
    tasks.map((task) => {
      if (task.completed) {
        count++;
      }
      return null;
    });
    return count;
  };

  const handleTaskFilter = (event) => {
    const tasksCopy = JSON.parse(JSON.stringify(taskData.taskList.taskList));
    setFilterTask(event.target.value);
    if (event.target.value === "Active") {
      const activeTasks = tasksCopy.filter((task) => !task.completed);
      setTasks(activeTasks);
    } else if (event.target.value === "Completed") {
      const completedTasks = tasksCopy.filter((task) => task.completed);
      setTasks(completedTasks);
    } else {
      setTasks(tasksCopy);
    }
  };

  const handlePriorityFilter = (event) => {
    console.log("===> event", event.target.value, taskData.taskList.taskList);
    const tasksCopy = JSON.parse(JSON.stringify(taskData.taskList.taskList));
    setFilterPriority(event.target.value);
    if (event.target.value === "High") {
      const highPriorityTasks = tasksCopy.filter(
        (task) => task.priority === "High"
      );
      setTasks(highPriorityTasks);
    } else if (event.target.value === "Medium") {
      const mediumPriorityTasks = tasksCopy.filter(
        (task) => task.priority === "Medium"
      );
      setTasks(mediumPriorityTasks);
    } else if (event.target.value === "Low") {
      const lowPriorityTasks = tasksCopy.filter(
        (task) => task.priority === "Low"
      );
      setTasks(lowPriorityTasks);
    } else {
      setTasks(tasksCopy);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="taskCount">
          <label>Total Task: {tasks.length}</label>&nbsp;
          <label>Completed Task: {calculateCompletedTask()}</label>&nbsp;
          <label>Pending Task: {tasks.length - calculateCompletedTask()}</label>
        </div>
        <div className="filterContainer">
          <div className="filterTaskContainer">
            <label>Filter Task</label>&nbsp;
            <select value={filterTask} onChange={handleTaskFilter}>
              <option value={"All"}>All</option>
              <option value={"Active"}>Active</option>
              <option value={"Completed"}>Completed</option>
            </select>
          </div>
          <div className="filterTaskContainer">
            <label>Filter Priority</label>&nbsp;
            <select value={filterPriority} onChange={handlePriorityFilter}>
              <option value={"All"}>All</option>
              <option value={"High"}>High</option>
              <option value={"Medium"}>Medium</option>
              <option value={"Low"}>Low</option>
            </select>
          </div>
        </div>
        {tasks.map((task, i) => {
          return (
            <div className="card-container" key={i}>
              <div className="card">
                <p className="title">Title: {task.title}</p>
                <p className="title">Description: {task.description}</p>
                <p className="status">
                  Status: {task.completed ? "Completed" : "Not completed"}
                </p>
              </div>
              <button
                className="markCompleteButton"
                onClick={() => handleClick(i)}
              >
                Edit Task
              </button>
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
              <h5 className="priorityLabel">Priority:</h5>&nbsp;
              <p>{task.priority}</p>
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
