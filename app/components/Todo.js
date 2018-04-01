import React from 'react';

class Todo extends React.Component {
    removeTodo() {
        var {index, handleRemove} = this.props;
        handleRemove(index);
    }
    render() {
        return (
            <div className="todo">
                <p>{this.props.children}</p>
                <button className="btn-delete"
                    onClick={this.removeTodo.bind(this)}>x Delete</button>
            </div>
        )
    }
}

module.exports = Todo;