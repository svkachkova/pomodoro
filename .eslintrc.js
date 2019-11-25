module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
        'plugin:prettier/recommended'
    ],
    parserOptions: {
        ecmaVersion:  2018,
        sourceType: 'module',
        project: './src/ts/tsconfig.json',
        'ecmaFeatures': {
            'jsx': true
        }
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'react/jsx-closing-bracket-location': 1,
        'react/jsx-closing-tag-location': 1,
        'react/jsx-filename-extension': [1, {'extensions': ['.tsx'] }],
        'react/jsx-no-bind': [1, { 'allowArrowFunctions': true }],
        'react/jsx-pascal-case': 1,
        'react/no-multi-comp': [1, { 'ignoreStateless': true }],
        'react/prefer-es6-class': 1,
        'react/prefer-stateless-function': 1,
        'react/require-render-return': 1,
        'react/self-closing-comp': 1,
        'prettier/prettier': 'error',
    },
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        node: true
    }
}
