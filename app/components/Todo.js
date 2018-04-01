import React from 'react';

class Todo extends React.Component {
    removeTodo() {
        var {index, handleRemove} = this.props;
        handleRemove(index);
    }
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button
                    onClick={this.removeTodo.bind(this)}>Delete</button>
            </div>
        )
    }
}

module.exports = Todo;