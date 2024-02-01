import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import EditTask from "./components/ToDoList/EditTask/EditTask";
import { useState } from "react";
import sampleData from "./data/sampleData.json";
import { TaskContext } from "./TaskContext";

function App() {
  const [taskList, setTaskList] = useState(sampleData);
  return (
    <div className="App">
      <h1>To Do List App</h1>'
      <TaskContext.Provider value={{ taskList, setTaskList }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="editTask/:id" element={<EditTask />} />
          </Routes>
        </BrowserRouter>
      </TaskContext.Provider>
    </div>
  );
}

export default App;
