import React, {useState} from "react";


function TodoForm(props) {
    const [newItem, setNewItem] = useState("");
    
    //console.log(newItem);

    const handleChange = (e) => {
        setNewItem(e.target.value);
    };
    const submitItem = (e) => {
        e.preventDefault();
        setNewItem("");
    };


    return(
        <>
        {/* {state.todoList.map((item) => {
            return (
            <div key={item.id}className="todo-list">
                <div onClick={() => dispatch({type: toggleItem})} className={`item${item.completed ? "completed" : ""}`}>
                    <p>{item.item}</p>
                </div>
            </div>
        )})} */}
        <form onSubmit={submitItem}>
            <input type="text" name="newItem" placeholder="New Todo" value={newItem} onChange={handleChange}/> 
            <br />
            <button onClick={() => props.addTodo(newItem)} className="add-item">Add New Item</button>
            <br />
            <button onClick={() => props.clearComplete()} className="clear-items">Clear Completed Item(s)</button>
        <br/>
        </form>
        
        </>
    )
};



export default TodoForm;
