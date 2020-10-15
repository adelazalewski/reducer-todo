import React, { useState } from 'react';
import './App.css';
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";

function App() {
  const [data, setData] = useState([]);

  const addItem = (itemTask) => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    };
    setData(newItem);
  };

  const clearCompleted = (e) => {
    e.preventDefault();
    setData(data.filter((item) => !item.completed));
  }

 const toggleItem = (itemId) => {
    console.log("Toggling item: ", itemId);

      //find the item in data array and toggle its completed flag
      setData(data.map((item) => {
        if(itemId === item.id){
          //return the item with the completed flag toggled
          return !item.completed
        }
        return item;
      }));
  };
  
  return (
    <div className="App">
      <header>
        Redux Reducer Todo App
      </header>
      <TodoForm addItem={addItem} clearCompleted={clearCompleted}/>
      <TodoList data={data} toggleItem={toggleItem}/>
    </div>
  );
}

export default App;
