import React from 'react';
import {connect} from 'react-redux';
import {toggleIsAdding, addTodo, errors} from 'action';

class TodoForm extends React.Component {

    handleSubmit(e){
        e.preventDefault();
        var {dispatch} = this.props;
        var todo =this.txtInput.value;
        if(todo){
            dispatch(addTodo(todo));
            this.toggle();
        }else {
            dispatch(errors('Please enter todo title '));
        }
    }

    toggle(){
        var {dispatch} = this.props;
        dispatch(toggleIsAdding());
        dispatch(errors(''));
    }

    render() {
        if(this.props.isAdding) return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="div-error">{this.props.errors}</div>
                <input autoFocus type="text" placeholder="Enter todo title" className={this.props.errors?'input-error':''} ref={ (input) => {this.txtInput= input;}}/><br/>
                <button>ADD</button>
                <button onClick={this.toggle.bind(this)} className="btn-cancel">CANCEL</button>
            </form>
        )

        return <button onClick={this.toggle.bind (this)}>+ ADD</button>
    }
}

module.exports = connect((state) => {
    return {isAdding: state.isAdding, errors:state.errors}
})(TodoForm);