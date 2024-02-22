module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          components: './src/components',
          locales: './src/locales',
          navigations: './src/navigations',
          reduxs: './src/reduxs',
          screens: './src/screens',
          hooks: './src/hooks',
          utils: './src/utils',
        },
      },
    ],
  ],
};
