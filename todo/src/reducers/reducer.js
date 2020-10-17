export const addItem = "ADD_TODO";
export const clearCompleted = "CLEAR_COMPLETED";
export const toggleItem = "TOGGLE_ITEM";

export const initialState = {
    todoList: [{
        item: 'Learn about reducers',
        completed: false,
        id: Date.now()
      }]
}
export const reducer = (state, action) => {
switch(action.type){
    case addItem:
        return{
            ...state,
            todoList: [...state.todoList, 
                {
            item: action.payload,
            completed: false
        }
            ]
        }
    case clearCompleted:
        return{
            ...state,
            todoList: state.todoList.filter((element) => !element.completed)
        } 
    case toggleItem:
        return{
            ...state,
            todoList: state.todoList.map((element) => element.id === action.payload ? {completed: !element.completed} : element)
            }
    default:
        return state
}
}