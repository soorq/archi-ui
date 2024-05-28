module.exports = {
    stories: ["../src/**/*.stories.@(ts|tsx)"],
    addons: [
        "@storybook/addon-webpack5-compiler-swc",
        "@storybook/addon-interactions",
        "@storybook/addon-essentials",
        "@storybook/addon-links",
        {
            name: '@storybook/addon-postcss',
            options: {
                postcssLoaderOptions: {
                    implementation: require('postcss'),
                },
            },
        },
    ],
    webpackFinal: (config) => {
        config.resolve.modules = [...(config.resolve.modules || []), "./src"];
        config.module.rules = [
            ...(config.module.rules || []),
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                type: "javascript/auto",
                use: [
                    { loader: "@svgr/webpack", options: { icon: true } },
                    "url-loader",
                ],
            },
        ];
        return config;
    },
    framework: {
        name: "@storybook/react-webpack5",
    },
    docs: {
        autodocs: true,
    },
    typescript: {
        check: false,
        checkOptions: {},
        reactDocgen: "react-docgen-typescript",
        reactDocgenTypescriptOptions: {
          shouldExtractLiteralValuesFromEnum: true,
          propFilter: (prop) =>
            prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
        },
  },
};
