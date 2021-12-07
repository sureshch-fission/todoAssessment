import "./App.css";
import TodoForm from "./components/jsfiles/Todoform";
import TodoList from "./components/jsfiles/TodoList";
import { useState } from "react/cjs/react.development";

function App() {
  const [todoList, settodolist] = useState([]);

  const todoAddHandler = (todo) => {
    settodolist((preTodos) => {
      const updatedtodos = [...preTodos];
      updatedtodos.unshift({ text: todo, id: Math.random().toString() });
      return updatedtodos;
    });
  };

  const deleteItemHandler = (taskId) => {
    settodolist((prevTodos) => {
      const updatedtodos = prevTodos.filter((task) => task.id !== taskId);
      return updatedtodos;
    });
  };

  return (
    <div className="App">
      <TodoForm ontodoAdd={todoAddHandler} />
      <TodoList ontodoAddList={todoList} removeTodo={deleteItemHandler} />
    </div>
  );
}

export default App;
