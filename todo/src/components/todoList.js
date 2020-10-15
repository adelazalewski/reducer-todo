import React from "react";
import TodoItem from "./todoItem";


function TodoList (props) {
    console.log(props);
return(
    <div className="todo-list">
{props.data.map((item) => (
    <TodoItem key={item.id} item={item} toggleItem={props.toggleItem}/>
))}
    </div>
)
}

export default TodoList; 