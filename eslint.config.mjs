import { FlatCompat } from '@eslint/eslintrc';
import js from '@eslint/js';

const compat = new FlatCompat({
    baseDirectory: import.meta.url,
    recommendedConfig: js.configs.recommended,
});

export default [
    {
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                // Definir los globals típicos
                require: "readonly",
                process: "readonly",
                __dirname: "readonly",
                __filename: "readonly",
                module: "readonly",
                exports: "readonly",
                console: "readonly",
                describe: "readonly",
                it: "readonly",
                expect: "readonly",
            },
        },
        files: ["**/*.js"]
    },
    ...compat.extends("eslint:recommended", "prettier"),
];
