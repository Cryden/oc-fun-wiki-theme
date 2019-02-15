const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    plugins: [
        new BrowserSyncPlugin(
            {
                proxy: 'fw.octobercms.loc',
                host: 'localhost',
                port: 3000,
                files: [
                    '**/*.htm',
                    'assets/**/*.*',
                    {
                        match: ['assets/css/**/*.css'],
                        fn: function (event, file) {
                            this.reload()
                        }
                    }
                ],
                injectChanges: true,
                injectCss: true,
            },
            { 
                reload: false 
            }
        )
    ]
});