import React, { useState } from "react";
import "../cssfiles/Todoform.css";

const TodoForm = (props) => {
  const [todolist, settodolist] = useState("");
  const [isValid, setisValid] = useState(true);


  //change EventHAndler
  const todoformchange = (e) => {
    e.preventDefault();
    settodolist(e.target.value);
  };

  //Submit EventHAndler
  const todoformSubmit = (e) => {
    e.preventDefault();

    if (todolist.trim().length === 0) {
      console.log("Please fill in All fields");
      setisValid(false);
      return;
    }

    props.ontodoAdd(todolist);
    settodolist("");
  };

  return (

    //input form 
    <form onSubmit={todoformSubmit}>
      <div className={`form-control ${!isValid ? "isvalid" : " "}`}>
        <label>Todo List</label>
        <input
          type="text"
          placeholder="Enter todo text"
          onChange={todoformchange}
          value={todolist}
        />
      </div>
      <button type="submit" className="btn">
        Add Tasks
      </button>
    </form>
  );
};
export default TodoForm;
