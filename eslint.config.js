import shiny from 'eslint-config-shiny'

export default [
    ...await shiny({ configs: ['base', 'format', 'vitest']}),
    {
        rules: {
            'no-underscore-dangle': 0,
            'unicorn/prefer-at': 0
        }
    }
]
