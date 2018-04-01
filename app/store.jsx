import {createStore, compose} from 'redux';
import reducer from 'reducer'; 

var store = createStore(reducer,compose(
    window.devToolsExtension?window.devToolsExtension(): f => f
));

module.exports = store;