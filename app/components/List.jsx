import React from 'react';
import Todo from 'Todo';
import TodoForm from 'TodoForm';
import Filter from 'Filter';
import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h2> Todo List</h2>
                <TodoForm/>
                <Filter/>
                {this.props.todoLists.map((todo,index) =>
                 <Todo key={index} index={index} completed={todo.completed}> {todo.text} </Todo> )}
                 <h5>Copyright@ tungnm.ict</h5>
            </div>
        )
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case 'SHOW_COMPLETED':
            return todos.filter(t => t.completed)
        case 'SHOW_ACTIVE':
            return todos.filter(t => !t.completed)
        case 'SHOW_ALL':
        default:
            return todos
    }
}


module.exports = connect((state) => {
    return {todoLists: getVisibleTodos(state.todoLists, state.visibilityFilter)}
})(List);