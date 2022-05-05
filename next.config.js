const withImages = require('next-images');
const withPlugins = require('next-compose-plugins');

const nextConfig = {
    loaders: [
        {
            test: /plugin\.css$/,
            loaders: ['style-loader', 'css'],
        },
        // {
        //     test: /\.svg$/,
        //     use: ['@svgr/webpack', 'url-loader']
        // },
    ],
    webpackDevMiddleware: (config) => {
        return config;
    },
    images: {
        disableStaticImages: true,
        domains: ['*.sendbird.com', 'file-ap-5.sendbird.com'],
    },
    env: {
        NEXTAUTH_URL: process.env.NEXTAUTH_URL,
        NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    },
};

module.exports = withPlugins([withImages], nextConfig);

// module.exports = withImages({
//     loaders: [
//         {
//             test: /plugin\.css$/,
//             loaders: ['style-loader', 'css'],
//         },
//     ],
// webpack(config) {
//     config.module.rules.push({
//         test: /\.svg$/i,
//         issuer: /\.[jt]sx?$/,
//         use: ['@svgr/webpack'],
//     });
//     return config;
// },
//     webpackDevMiddleware: (config) => {
//         return config;
//     },
//     images: {
//         disableStaticImages: true,
//         domains: ['*.sendbird.com', 'file-ap-5.sendbird.com'],
//     },
// });
