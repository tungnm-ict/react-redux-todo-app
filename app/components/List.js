import React from 'react';
import Todo from 'Todo';
import TodoForm from 'TodoForm';
import {connect} from 'react-redux';

class List extends React.Component {
    render() {
        return (
            <div className="todo-list">
                <h2> Todo List</h2>
                <TodoForm/>
                {this.props.todoLists.map((todo,index) =>
                 <Todo key={index} index={index} completed={todo.completed}> {todo.text} </Todo> )}
                 <h5>Copyright@ tungnm.ict</h5>
            </div>
        )
    }
}

module.exports = connect(function(state) {
    return {todoLists: state.todoLists}
})(List);