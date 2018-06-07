var webpack = require('webpack');

module.exports = { // 객체를 모듈로 내보내겠다는 뜻 , 
    // 모드 값을 'production'으로 설정하면 최적화된 상태에서
   	// 'development'로 설정하면 소스맵을 효과적으로 JS파일이 출력된다.
   	mode: 'development',

    entry: ['react-hot-loader/patch', './src/index.js'],

    output: {
        path: __dirname + '/public/',
        filename: 'bundle.js'
    },

    devServer: {
        hot: true, // 파일 수정될때마다 리로딩
        inline: true,
        host: '0.0.0.0',
        port: 3007,
        contentBase: __dirname + '/public/',
    },

    module: {
        rules: [ // webpack 4.0 이상에서 부터는 modules => rules 로 변경!! 주의
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'react'],
                    plugins: ["react-hot-loader/babel"]
                }
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}