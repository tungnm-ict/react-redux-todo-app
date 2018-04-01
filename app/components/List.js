import React from 'react';
import Todo from './Todo';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: ['ReactJs', 'Redux', 'React Native']
        }
    }

    remove(index){
        this.state.todoLists.splice(index,1);
        this.setState(this.state);
    }

    render() {
        return (
            <div>
                {this.state.todoLists.map((todo,index) =>
                 <Todo key={index} index={index} handleRemove={this.remove.bind(this)}>{todo} </Todo> )}
            </div>
        )
    }
}

module.exports = List;