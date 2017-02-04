var path = require('path');
var webpack = require('webpack')

module.exports = {
	entry: path.resolve(__dirname, 'demo/index.js'),
	output: {
		path: path.resolve(__dirname, 'demo/build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
			exclude: /node_modules/,
			loader: 'babel',
			query: {
				presets: ['es2015', 'react', 'stage-2']
			}
		},{
			test: /\.(png|jpg|gif)$/,
			loader: 'url-loader?limit=8192'
		},{
			test: /\.css$/,
			loader: 'style!css'
		},{
			test: /\.json$/,
			loader: 'json'
		},{
			test: /\.md$/,
			loader: 'raw'
		}]
	},
/*	plugins: [
		new webpack.DefinePlugin({
		  'process.env': {
		    NODE_ENV: JSON.stringify('production')
		  }
		}),
		new webpack.optimize.UglifyJsPlugin()	
	]*/
}	

			