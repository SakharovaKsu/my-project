const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const { whenProd, when } = require('@craco/craco');
const webpack = require('webpack');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
    },
    plugins: [
      new webpack.DefinePlugin({
        __IS_DEV__: JSON.stringify(process.env.NODE_ENV !== 'production'),
      }),
    ],
    configure: (webpackConfig, { env }) => {
      const minimizationConfig = {
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
            unused: true,
            drop_console: true,
            drop_debugger: true,
          },
          mangle: {
            safari10: true,
          },
          keep_classnames: false,
          keep_fnames: false,
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
      };

      when(process.env.ANALYZE === 'true', () => {
        webpackConfig.plugins.push(new BundleAnalyzerPlugin());
      });

      when(env === 'test', () => {
        webpackConfig.optimization = {
          minimize: true,
          minimizer: [new TerserPlugin(minimizationConfig)],
        };
      });

      whenProd(() => {
        webpackConfig.devtool = 'source-map';
        webpackConfig.optimization = {
          minimize: true,
          minimizer: [new TerserPlugin(minimizationConfig)],
        };
        return webpackConfig;
      }, webpackConfig);

      return webpackConfig;
    },
  },
};
