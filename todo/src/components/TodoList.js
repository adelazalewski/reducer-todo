import React from "react";
import TodoItem from "./TodoItem";


function TodoList (props) {
    //console.log(props);

return(
    <div className="todo-list">
{props.state.todoList.map((item) => (
    <TodoItem key={item.id} item={item} toggleTodo={props.toggleTodo}/>
))}
    </div>
)
}

export default TodoList;