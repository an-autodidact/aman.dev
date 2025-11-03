module.exports = {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue'
  ],
  // Custom Stylelint configuration
  // https://stylelint.io/user-guide/configure
  rules: {
    'at-rule-no-deprecated': null,

    'function-no-unknown': [
      true,
      {
        ignoreFunctions: ['theme'],
      },
    ],

    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'screen'],
      },
    ],

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
