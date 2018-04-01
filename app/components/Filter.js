import React from 'react';
import FilterLink from 'FilterLink';
import {connect} from 'react-redux';

class Filter extends React.Component {

    render() {
        return (
            <div>
                <FilterLink filter="SHOW_ALL" active={this.props.filter== 'SHOW_ALL' ? 'active' : ''}>ALL</FilterLink>
                <FilterLink filter="SHOW_ACTIVE" active={this.props.filter== 'SHOW_ACTIVE' ? 'active' : ''}>ACTIVE</FilterLink>
                <FilterLink filter="SHOW_COMPLETED" active={this.props.filter== 'SHOW_COMPLETED' ? 'active' : ''}>COMPLETE</FilterLink>
            </div>
        )
    }
}

module.exports = connect((state) => {
    return {filter: state.visibilityFilter}
})(Filter);