module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,webp,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};