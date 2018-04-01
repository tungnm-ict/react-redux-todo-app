import React from 'react';

class Todo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.children}</p>
                <button>Delete</button>
            </div>
        )
    }
}

module.exports = Todo;