import React from "react";
import sampleData from "./../../data/sampleData.json";
import ToDoList from "../ToDoList/ToDoList";

const Home = () => {
  return <ToDoList sampleData={sampleData}></ToDoList>;
};

export default Home;
