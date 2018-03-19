const merge = require('webpack-merge');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

module.exports = {
  appFolder: 'demo', // Defaults to app
  outputFolder: 'docs', // Defaults to dist
  merge(wpc) {
    return merge.strategy({
      'resolve.mainFields': 'prepend'
    })(wpc, {
      module: {
        rules: [
          // Loader for GraphQL (.gql, .graphql) files
          // {
          //   test: /\.(graphql|gql)$/,
          //   exclude: /node_modules/,
          //   loader: 'graphql-tag/loader'
          // }
        ]
      },
      resolve: {
         alias: {
           'plotly.js': 'node_modules/plotly.js/dist/plotly-basic.js' // Plotly.js fix
         },         
         plugins: [
           new TsConfigPathsPlugin()
         ]      
      },
    });
  }
}
