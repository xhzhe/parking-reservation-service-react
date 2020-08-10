module.exports = {
    parser: "babel-eslint",
    extends: ["plugin:react/recommended", "airbnb", "prettier"],
    rules: {
        'no-unused-vars': 2,
        "no-undef": 0,
        "react/no-array-index-key": 0,
        "react/no-unused-state": 0,
        "jsx-a11y/interactive-supports-focus": 0,
        "jsx-a11y/click-events-have-key-events": 0,
        "no-underscore-dangle": 0,
        "import/no-unresolved": 0,
        "react/prop-types": 0,
        "no-use-before-define": 1,
        "react/jsx-indent":0,
        "react/destructuring-assignment": 1,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/prefer-stateless-function": 0
    }
  };