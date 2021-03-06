import React from "react";
import "./Todoitem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";


const Todoitem = ({ name, done, id }) => {

  const dispatch = useDispatch()

  const handleCheck = () => {
    dispatch(setCheck(id))
  };

  return (
    <div className="todoItem">
      {/* Checkbox */}
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
      {/* name */}
      <p className={done && "todoItem--done"}>{name}</p>
    </div>
  );
};

export default Todoitem;
