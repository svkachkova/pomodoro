module.exports = {
    parser: '@typescript-eslint/parser',
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'prettier/@typescript-eslint'
    ],
    parserOptions: {
        ecmaVersion:  2018,
        sourceType: 'module',
        project: './src/ts/tsconfig.json'
    },
    rules: {
        '@typescript-eslint/no-explicit-any': 'always',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'prettier/prettier': 'error'
    },
    env: {
        browser: true,
        node: true
    }
}