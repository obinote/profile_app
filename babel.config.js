module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          src: './src',
          // apis: './src/apis',
          components: './src/components',
          // features: './src/features',
          locales: './src/locales',
          navigations: './src/navigations',
          reduxs: './src/reduxs',
          screens: './src/screens',
          // types: './src/types',
          // hooks: './src/hooks',
          utils: './src/utils',
          // schema: './src/schema',
        },
      },
    ],
  ],
};
