var redux = require('redux');
var todoLists = require('./todoLists');
var isAdding = require('./isAdding');
var errors = require('./errors');

var reducer = redux.combineReducers({todoLists, isAdding, errors});

module.exports = reducer;