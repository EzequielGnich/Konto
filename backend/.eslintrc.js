module.exports = {
    env: {
        browser: true,
        commonjs: true,
        es6: true
    },
    extends: "eslint:recommended",
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly"
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    rules: {
        "consistent-return": 2,
        indent: [1, 4],
        "no-else-return": 1,
        semi: [1, "always"],
        "space-unary-ops": 2
    }
};
