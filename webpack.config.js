var path = require('path');

module.exports = {
    entry: './app/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        alias: {
            reducer: path.resolve(__dirname, 'app/reducer/reducer.jsx'),
            store: path.resolve(__dirname, 'app/store.jsx'),
            action: path.resolve(__dirname, 'app/action.jsx'),
            List: path.resolve(__dirname, 'app/components/List.jsx'),
            Todo: path.resolve(__dirname, 'app/components/Todo.jsx'),
            TodoForm: path.resolve(__dirname, 'app/components/TodoForm.jsx'),
            Filter: path.resolve(__dirname, 'app/components/Filter.jsx'),
            FilterLink: path.resolve(__dirname, 'app/components/FilterLink.jsx'),
        }
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react','stage-0']
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
            }
        ]
    },
    mode: 'development'
}