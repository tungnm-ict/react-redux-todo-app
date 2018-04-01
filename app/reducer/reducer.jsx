import {combineReducers} from 'redux';
import todoLists from './todoLists.jsx';
import isAdding from './isAdding.jsx';
import errors from './errors.jsx';
import visibilityFilter from './visibilityFilter.jsx';

var reducer = combineReducers({todoLists, isAdding, errors, visibilityFilter});

module.exports = reducer;