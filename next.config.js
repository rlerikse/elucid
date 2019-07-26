const withCSS = require("@zeit/next-css");

if (typeof require !== "undefined") {
    require.extensions[".less"] = () => {};
    require.extensions[".css"] = file => {};
}

// next.config.js is not transformed by Babel. So you can only use javascript features supported by your version of Node.js.

module.exports = withCSS({
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config
        // Important: return the modified config
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config
        // Important: return the modified config
        return config;
    }
});