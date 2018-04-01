var todoListsReducer =  (state =  ['ReactJs', 'Redux', 'React Native'], action) => {
    switch (action.type) {
        case "ADD_TODO":
            return [...state, action.todo]
        case "REMOVE_TODO":
            return state.filter((e, i) => i != action.index)
        default:
            return state;
    } 
}

module.exports = todoListsReducer;