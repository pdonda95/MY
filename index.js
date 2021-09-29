module.export = {
	env: {
		browser: true,
		node: true,
		es2021: true
	},
	extends: [
		'standard'
	],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module'
	},
	rules: {
		'no-var': 'error',
		'indent': ['error', 'tab'],
		'no-tabs': ['error', { allowIndentationTabs: true }]
	}
};
