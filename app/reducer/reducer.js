import {combineReducers} from 'redux';
import todoLists from './todoLists';
import isAdding from './isAdding';
import errors from './errors';
import visibilityFilter from './visibilityFilter';

var reducer = combineReducers({todoLists, isAdding, errors, visibilityFilter});

module.exports = reducer;