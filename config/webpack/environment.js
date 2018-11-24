const { environment } = require('@rails/webpacker')

module.exports = environment

const sass_loader_config = environment.loaders.get('sass').use.find( (el) => el.loader === 'sass-loader')

sass_loader_config.options.importer = function(url, prev) {
    if(url.indexOf('@material') === 0) {
        var filePath = url.split('@material')[1];
        var nodeModulePath = './node_modules/@material/' + filePath;
        return { file: require('path').resolve(nodeModulePath) };
    }

    if(url.indexOf('material-components-web') === 0) {
        var nodeModulePath = './node_modules/material-components-web/material-components-web';
        return { file: require('path').resolve(nodeModulePath) };
    }

    return { file: url };
}