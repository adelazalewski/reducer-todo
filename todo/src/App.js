import React, {useReducer} from 'react';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import './App.css';
import { reducer, addItem, clearCompleted, toggleItem, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //console.log(state);

// clearCompleted = (e) => {
//   e.preventDefault();
//   this.setState({
//     ...this.state,
//     data: this.state.data.filter((item) => !item.completed)
//   });
// }
// toggleItem = (itemId) => {
//   console.log("Toggling item: ", itemId);
//   this.setState({
//     //find the item in data array and toggle its completed flag
//     data: this.state.data.map((item) => {
//       if(itemId === item.id){
//         return {
//           //return the item with the completed flag toggled
//           ...item,
//           completed: !item.completed
//         };
        
//       }
//       return item;
//     }) 
//   })
// }
const addTodo = (item) => dispatch({type: addItem, payload: item});
const clearComplete = () => dispatch({type: clearCompleted});
const toggleTodo = (id) => dispatch({type: toggleItem, payload: id});
  
    return (
     
      <div className="App">
      <header className="header">
        <p>Redux Reducer Todo App</p>
      </header>
      
      <TodoList state={state} toggleTodo={toggleTodo}/>
      <TodoForm addTodo={addTodo} clearComplete={clearComplete}/>
      </div>
    );
  
}

export default App;
