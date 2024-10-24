module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,png,jpg,js,txt,json,scss,woff,woff2,php,html}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};