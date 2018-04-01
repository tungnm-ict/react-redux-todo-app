import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoLists: ['ReactJs', 'Redux', 'React Native']
        }
    }

    remove(index){
        this.state.todoLists.splice(index, 1);
        this.setState(this.state);
    }

    add(todo){
        this.state.todoLists.push(todo);
        this.setState(this.state)
    }

    render() {
        return (
            <div className="todo-list">
                <h2> Todos List</h2>
                <TodoForm handleAdd={this.add.bind(this)}/>
                {this.state.todoLists.map((todo,index) =>
                 <Todo key={index} index={index} handleRemove={this.remove.bind(this)}>{todo} </Todo> )}
                 <h5>Copyright@ tungnm.ict</h5>
            </div>
        )
    }
}

module.exports = List;