import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const inputRef = useRef();
  const handleAddtodo = () => {
    const text = inputRef.current.value;
    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };
  const handleItemDone = (index)=>{
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  }
  const handleDelete = (index)=>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }
  
  return (
    <div className="App">
      <h2 style={{ textAlign: "center" }}>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({text, completed}, index) => {
            return (<div className="item" key={index}><li onClick={() => handleItemDone(index)} className={completed ?"done":""}>{text}</li>
            <span className="trash" onClick={() => handleDelete(index)}><i className="fa fa-trash"></i></span>
          </div>)
          })}
        </ul>
        <div className="input-container">
          <input ref={inputRef} placeholder="Enter Item..."></input>
          <button onClick={handleAddtodo}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default App;
