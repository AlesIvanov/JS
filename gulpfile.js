const { src, dest, watch, series } = require('gulp');
const webpack = require("webpack-stream")
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const htmlWebpackPlugin = require("html-webpack-plugin")

const dist = "C://OpenServer/domains/jsBasis"

const wbp = (cd) => {
    src("./src/main.js")
        .pipe(webpack({
            mode: 'development',
            output: {
                filename: 'script.js'
            },
            watch: false,
            devtool: "source-map",
            plugins: [
                new MiniCssExtractPlugin(),
                new htmlWebpackPlugin({
                    title: 'My App',
                    filename: "index.html",
                    template: 'src/index.html',
              })],
            module: {
                rules: [
                    {
                        test: /\.m?js$/,
                        exclude: /(node_modules|bower_components)/,
                        use: {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    ['@babel/preset-env',
                                        {
                                            debug: false,
                                            corejs: 3,
                                            useBuiltIns: "usage"
                                        }],
                                    "@babel/react"]
                            }
                        }
                    },
                    {
                        test: /\.css$/,
                        use: [MiniCssExtractPlugin.loader,'css-loader']
                    },
                    {
                        test: /\.s[ac]ss$/i,
                        use: [
                            // Creates `style` nodes from JS strings
                            "style-loader",
                            // Translates CSS into CommonJS
                            "css-loader",
                            // Compiles Sass to CSS
                            "sass-loader",
                        ],
                    },
                ]
            }
        }))
        .pipe(dest(dist))
    cd()
}

const api = (cd) => {
    src("./api/**/*.*")
        .pipe(dest(dist + '/api'))
    cd()
}

const watcher = () => {  
    watch("./src/**/*.*", wbp)
    watch("./api/**/*.*", api)    
}

module.exports = {
    dev : series( 
        api,     
        wbp,
        watcher
    ),
    build: series(   
        api,    
        wbp
    )
}