/** @type { import('@storybook/vue3-webpack5').StorybookConfig } */

const path = require('path');

const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-styling-webpack",
    "@storybook/preset-scss",
    ({
        name: "@storybook/addon-styling-webpack",

        options: {
          rules: [{
            test: /\.css$/,
            sideEffects: true,
            use: [
                require.resolve("style-loader"),
                {
                    loader: require.resolve("css-loader"),
                    options: {
                        
                        
                    },
                },
            ],
          },{
            test: /\.s[ac]ss$/,
            sideEffects: true,
            use: [
              require.resolve("style-loader"),
              {
                  loader: require.resolve("css-loader"),
                  options: {
                      
                      importLoaders: 2,
                  },
              },
              require.resolve("resolve-url-loader"),
              {
                  loader: require.resolve("sass-loader"),
                  options: {
                      // Want to add more Sass options? Read more here: https://webpack.js.org/loaders/sass-loader/#options
                      implementation: require.resolve("sass"),
                      sourceMap: true,
                      sassOptions: {},
                  },
              },
            ],
          }],
        }
    })
  ],
  framework: {
    name: "@storybook/vue3-webpack5",
    options: {},
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, "..", "src"),
    };

    return config;
  }
};
export default config;
