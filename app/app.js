var React = require('react');
var ReactDOM = require('react-dom');
var List = require('List');
var {Provider} = require('react-redux');
var store = require('store');
ReactDOM.render(
    <Provider store={store}>
        <List/>
    </Provider>
    ,
    document.getElementById('root')
);


