module.exports = {
  parserOptions: {
    "parser": "babel-eslint",
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  env: {
    "es6": true,
    "node": true,
    "browser": true,
    "commonjs": true
  },
  plugins: [
    "vue"
  ],
  globals: {
    "document": false,
    "navigator": false,
    "window": false
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off"
  }
};
