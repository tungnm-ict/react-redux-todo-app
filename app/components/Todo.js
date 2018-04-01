import React from 'react';
import {connect} from 'react-redux';
import {removeTodo, toggleTodo} from 'action';

class Todo extends React.Component {
    removeTodo() {
        var {index, dispatch} = this.props;
        dispatch(removeTodo(index));
    }
    toggleTodo(){
        var {index, dispatch} = this.props;
        dispatch(toggleTodo(index));
    }
    render() {
        return (
            <div className="todo">
                <p>{this.props.children}</p>
                <button className="btn-danger"
                    onClick={this.removeTodo.bind(this)}>x DELETE</button>
                <button className={this.props.completed?'btn-right':'btn-right btn-danger'}
                    onClick={this.toggleTodo.bind(this)}>{this.props.completed?'COMPLETED':'ACTIVE'}</button>
            </div>
        )
    }
}

module.exports = connect()(Todo);