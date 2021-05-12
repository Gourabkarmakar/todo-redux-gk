import React from "react";
import "./App.css";
import Input from "./components/Input";
import Todoitem from "./components/Todoitem";
import { useSelector } from "react-redux";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList)
  return (
    <div className="app">
      <div className="app_container">
        <div className="app_todoContainer">
          {todoList.map((item) => {
            return <Todoitem name={item.item} done={item.done} id={item.id} />;
          })}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
