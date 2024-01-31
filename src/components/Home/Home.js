import React, { useState } from "react";
import sampleData from "./../../data/sampleData.json";
import ToDoList from "../ToDoList/ToDoList";
import { TaskContext } from "../../TaskContext";

const Home = () => {
    const [taskList, setTaskList] = useState({taskList: sampleData});
  return (
    <TaskContext.Provider value={{ taskList, setTaskList }}>
      <ToDoList sampleData={sampleData}></ToDoList>;
    </TaskContext.Provider>
  );
};

export default Home;
