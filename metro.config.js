/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * Added from this github issue:
 * https://github.com/wix/react-native-navigation/issues/4757
 * 
 * @format
 */

module.exports = {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
  };