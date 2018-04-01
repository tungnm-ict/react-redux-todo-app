var redux = require('redux');

var todoListsReducer =  (state =  ['ReactJs', 'Redux', 'React Native'], action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return [...state, action.item]
        case 'REMOVE_ITEM':
            return state.filter((e, i) => i != action.index)
        default:
            return state;
    } 
}

var isAddingReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_IS_ADDING':
            return  !state;
        default:
            return state;
    } 
}

var reducer = redux.combineReducers({
    todoLists: todoListsReducer,
    isAdding: isAddingReducer
});

var store = redux.createStore(reducer,redux.compose(
    window.devToolsExtension?window.devToolsExtension(): f => f
));

store.dispatch({type: 'TOGGLE_IS_ADDING'});
store.dispatch({type: 'ADD_ITEM', item: 'NodeJS'});
store.dispatch({type: 'REMOVE_ITEM', index: 1});

module.exports = store;