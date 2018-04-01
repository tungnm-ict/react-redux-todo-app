import React from 'react';
import Todo from 'Todo';
import TodoForm from 'TodoForm';
import {connect} from 'react-redux';
import {setVisibilityFilter} from 'action';

class FilterLink extends React.Component {
    filter(){
        var {dispatch,filter} = this.props;
        dispatch(setVisibilityFilter(filter));
    }
    render() {
        return (
            <button className={this.props.active?'btn-active':'btn-link'} 
            onClick={this.filter.bind(this)}>
                {this.props.children}
            </button>
        )
    }
}

module.exports = connect()(FilterLink);