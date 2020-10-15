import React, { useState } from "react";

function TodoForm(props) {
const [newItem, setNewItem] = useState("");

const handleChange = (e) => {
    setNewItem(e.target.value);
};
const submitItem = (e) => {
    e.preventDefault();
    setNewItem("");
    
};
    return(
        <>
        <form onSubmit={submitItem}>
            <input type="text" name="newItem" placeholder="New Todo" value={newItem} onChange={handleChange}/>
            <button onClick={() =>props.addItem(newItem)} className="add-item">Add New Item</button>
        <button onClick={props.clearCompleted} className="clear-items">Clear Completed Item(s)</button>
        </form>
        </>
    )
}



export default TodoForm;