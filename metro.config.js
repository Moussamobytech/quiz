const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// module.exports = {
//     resolver: {
//       assetExts: ['svg', 'jpg', 'png'],
//     },
//     transformer: {
//       babelTransformerPath: require.resolve('react-native-svg-transformer'),
//     },
//   };
  