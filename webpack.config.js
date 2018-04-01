var path = require('path');

module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve:{
        alias: {
            reducer: path.resolve(__dirname, 'app/reducer/reducer.js'),
            store: path.resolve(__dirname, 'app/store.js'),
            action: path.resolve(__dirname, 'app/action.js'),
            List: path.resolve(__dirname, 'app/components/List.js'),
            Todo: path.resolve(__dirname, 'app/components/Todo.js'),
            TodoForm: path.resolve(__dirname, 'app/components/TodoForm.js'),
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