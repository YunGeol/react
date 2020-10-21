module.exports = {
    webpack: config => { //❶
        config.module.rules.push({ //❷
            test: /.(png|jpg|jpeg)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]?[hash]', //❸
                    emitFile: false, //❹
                    publicPath: '/',
                },
            }],
        });
        return config;
    },
};