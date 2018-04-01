import React from 'react';
import {connect} from 'react-redux';
import {removeTodo} from 'action';

class Todo extends React.Component {
    removeTodo() {
        var {index, dispatch} = this.props;
        dispatch(removeTodo(index));
    }
    render() {
        return (
            <div className="todo">
                <p>{this.props.children}</p>
                <button className="btn-delete"
                    onClick={this.removeTodo.bind(this)}>x DELETE</button>
            </div>
        )
    }
}

module.exports = connect()(Todo);