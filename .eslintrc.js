module.exports = {
    extends: ['airbnb-base', 'prettier', 'plugin:jest/recommended'],
    plugins: ['prettier', 'jest'],
    env: {
        node: true,
        mocha: true,
    },
    rules: {
        'prettier/prettier': ['error'],
        'no-underscore-dangle': 0,
        'no-restricted-syntax': 0,
        'import/no-extraneous-dependencies': [
            'error',
            { devDependencies: ['**/test/**/*.js'] },
        ],
    },
};
