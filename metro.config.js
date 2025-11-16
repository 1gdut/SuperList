const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const defaultConfig = getDefaultConfig(__dirname);

const config = {
  // FlashList 需要的配置
  resolver: {
    // 确保可以解析 FlashList 的模块
    alias: {
      'react-native': 'react-native',
    },
  },
  // 可能需要的转换器配置
  transformer: {
    // 如果您需要支持 SVG，可以取消下面这行的注释
    // babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
};

module.exports = mergeConfig(defaultConfig, config);
