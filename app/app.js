var React = require('react');
var ReactDOM = require('react-dom');
var List = require('./components/List');

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

var store = require('./store');
