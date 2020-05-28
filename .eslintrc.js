module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    "no-param-reassign": "off",
    "no-plusplus": "off",
    "max-len": "warn",
    "comma-dangle": "off",
    "no-console": "off",
    "prettier/prettier": "warn",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "vue/singleline-html-element-content-newline": "off",
    "vue/require-default-prop": "off",
    "vue/html-closing-bracket-spacing": "off",
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: 5,
        multiline: {
          max: 5,
          allowFirstLine: true
        }
      }
    ]
  }
}
