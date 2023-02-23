module.exports = {
  extends: [
    'mantine',
    'plugin:@next/next/recommended',
    'plugin:jest/recommended',
    'plugin:storybook/recommended',
  ],
  plugins: ['testing-library', 'jest'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react'],
    },
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  // These rules exist to turn off horrible errors that
  // get thrown due to Typescript/ESLint not playing nice
  // with each other.
  // they were added 23 Feb 2023
  // One defines them by 'error message': 'off'
  // Fuck web development wtf burn it all down and start over
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'no-return-assign': 'off', // this one prob very dangerous
    'react/jsx-closing-tag-location': 'off',
    'react/self-closing-comp': 'off',
    'no-trailing-spaces': 'off',
    'import/no-duplicates': 'off',
    'react/jsx-boolean-value': 'off',
    'no-multi-str': 'off', // will screw pre-ES5 browsers... but keep the code tidy
  },
};
