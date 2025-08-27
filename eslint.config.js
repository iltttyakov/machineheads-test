import js from '@eslint/js'
import typescriptParser from '@typescript-eslint/parser'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import importX from 'eslint-plugin-import-x'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import unusedImports from 'eslint-plugin-unused-imports'
import reactPlugin from 'eslint-plugin-react'
import reactRefresh from 'eslint-plugin-react-refresh'
import globals from 'globals'

export default [
    js.configs.recommended,
    {
        files: ['**/*.ts', '**/*.tsx'],
        ignores: ['dist', '*.cjs', '*.d.ts', '*.mjs', 'vite.config.ts', 'lingui.config.ts'],
        languageOptions: {
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
                sourceType: 'module',
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                ...globals.browser,
                ...globals.es2020,
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            '@typescript-eslint': typescriptPlugin,
            'import': importX,
            'simple-import-sort': simpleImportSort,
            'unused-imports': unusedImports,
            'react': reactPlugin,
            'react-refresh': reactRefresh,
        },
        rules: {
            // TypeScript rules
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
            '@typescript-eslint/return-await': ['error', 'in-try-catch'],
            '@/indent': ['warn', 2],
            '@/comma-dangle': ['error', 'always-multiline'],
            '@/object-curly-spacing': ['error', 'always'],
            '@typescript-eslint/no-unused-vars': 'warn',
            '@typescript-eslint/no-var-requires': 'error',
            '@typescript-eslint/no-use-before-define': ['error'],
            '@/lines-between-class-members': ['error', 'always'],
            '@/comma-spacing': 'error',
            '@/space-infix-ops': 'error',
            '@/keyword-spacing': 'error',
            '@/space-before-blocks': 'error',
            '@/quotes': ['warn', 'single'],

            // Import rules
            'simple-import-sort/imports': 'warn',
            'simple-import-sort/exports': 'warn',
            'unused-imports/no-unused-imports': 'error',
            'import/first': 'error',
            'import/newline-after-import': 'error',
            'import/no-duplicates': 'error',
            'import/no-unresolved': 'off',
            'import/order': 'off',
            'import/extensions': 'off',
            'import/no-amd': 'error',
            'import/no-extraneous-dependencies': ['error', {
                devDependencies: true,
                peerDependencies: true,
                optionalDependencies: false,
            }],
            'import/no-mutable-exports': 'error',
            'import/no-named-default': 'error',
            'import/no-named-export': 'off',
            'import/no-self-import': 'error',
            'import/prefer-default-export': 'off',

            // React rules
            'react/display-name': 'off',
            'react/jsx-tag-spacing': 'error',
            'react/jsx-max-props-per-line': ['error', {
                maximum: {
                    single: 3,
                    multi: 1
                }
            }],
            'react/jsx-first-prop-new-line': ['error', 'multiline-multiprop'],
            'react/jsx-sort-props': ['warn', {
                callbacksLast: true,
                shorthandFirst: true,
                multiline: 'last',
                reservedFirst: true,
                noSortAlphabetically: true
            }],
            'react/jsx-indent': ['error', 2, {
                indentLogicalExpressions: true
            }],
            'react/jsx-indent-props': ['error', 2],
            'react/jsx-closing-tag-location': 'error',
            'react/jsx-closing-bracket-location': 'error',
            'react/jsx-wrap-multilines': ['error', {
                declaration: 'parens-new-line',
                assignment: 'parens-new-line',
                return: 'parens-new-line',
                arrow: 'parens-new-line',
                condition: 'parens-new-line',
                logical: 'parens-new-line',
                prop: 'parens-new-line'
            }],
            'react/jsx-one-expression-per-line': ['warn', {
                allow: 'single-child'
            }],
            'react/jsx-boolean-value': ['error', 'never'],
            'react/jsx-no-useless-fragment': ['warn', {
                allowExpressions: true
            }],
            'react/self-closing-comp': ['warn', {
                component: true,
                html: true
            }],
            'react/jsx-curly-brace-presence': ['warn', {
                props: 'never',
                children: 'never',
                propElementValues: 'always'
            }],
            'react/jsx-equals-spacing': 'error',
            'react/jsx-curly-spacing': ['error', { when: 'never', children: true }],
            'react-refresh/only-export-components': [
                'warn',
                { allowConstantExport: true },
            ],

            // Other rules
            'max-len': ['warn', {
                code: 120,
                ignoreStrings: true,
                ignorePattern: '^\\s*var\\s.+=\\s*require\\s*\\(',
                ignoreUrls: true
            }],
            'newline-before-return': 'warn',
            'no-console': ['warn', { allow: ['error'] }],
            'semi': ['error', 'never'],
            'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0, maxBOF: 0 }],
            'no-trailing-spaces': 'error',
            'object-shorthand': 'error',
            'no-multi-spaces': 'error',
            'no-useless-rename': 'error',
            'eol-last': 'error',
            'arrow-spacing': 'error',
            'dot-notation': 'error',
        },
    },
]