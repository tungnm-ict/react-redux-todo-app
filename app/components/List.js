import React from 'react';
import Todo from './Todo';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: ['ReactJs', 'Redux', 'React Native']
        }
    }

    render() {
        return (
            <div>
                {this.state.todoLists.map((todo,index) => <Todo key={index} index={index} >{todo} </Todo> )}
            </div>
        )
    }
}

module.exports = List;