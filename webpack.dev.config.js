let path = require(`path`);
let HTMLWebpackPlugin = require(`html-webpack-plugin`);
let FileManagerPlugin = require(`filemanager-webpack-plugin`);

let config = {
    mode: `development`,
    entry: `./src/index.tsx`,
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: `bundle.js`
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/
          },
          {
              test: /\.scss/,
              use: [
                  `style-loader`,
                  `css-loader`,
                  `sass-loader`
              ]
          }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: `./index.html`
        }),
        new FileManagerPlugin({
            onEnd: {
                copy: [
                    {
                        source: path.resolve(__dirname, 'src/assets/**/*'),
                        destination: path.resolve(__dirname, 'dist/assets/')
                    }
                ]
            }
        })
    ]
};

module.exports = config;