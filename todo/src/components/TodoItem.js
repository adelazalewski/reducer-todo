import React from "react";

function TodoItem (props) {
    //console.log(props);

return(
    <div onClick={() => props.toggleTodo(props.item.id)}
    className={`item${props.item.completed ? "completed" : ""}`}>
        <p>{props.item.item}</p>
    </div>
)
}

export default TodoItem;