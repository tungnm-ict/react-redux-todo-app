var initialState = [
    { text: 'ReactJs', completed: true },
    { text: 'Redux', completed: false },
    { text: 'React Native', completed: false },
];

var todoListsReducer =  (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, {text: action.todo, completed: false }]
        case "REMOVE_TODO":
            return state.filter((todo, index) => i != action.index)
        case "TOGGLE_TODO":
            return state.map((todo, index) => {
                if (index === action.index) {
                    return {...todo, completed: !todo.completed}
                }
                return todo
            })
        default:
            return state;
    } 
}

module.exports = todoListsReducer;