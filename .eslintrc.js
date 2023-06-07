module.exports = {
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'plugin:@typescript-eslint/strict',
	],
	plugins: ['@typescript-eslint'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: true,
		tsconfigRootDir: __dirname,
	},
	root: true,
	rules: {
		'@typescript-eslint/prefer-as-const': 'error',
		'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		'no-console': ['warn', { allow: ['warn'] }],
		'@typescript-eslint/no-unused-vars': 'warn',
		'@typescript-eslint/no-unused-expressions': 'warn',
	},
};
