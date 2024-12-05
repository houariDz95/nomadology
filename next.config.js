/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    webpack: (config) => {
        // Add .web.js to resolve extensions
        config.resolve.extensions = ['.web.js', '.js', '.jsx', '.ts', '.tsx', '.json', ...config.resolve.extensions];
    
        return config;
      },
    compiler:{
        removeConsole: true,
    },
    compiler:{
        removeConsole: false, // ❗️❗️❗️❗️❗️ this removes the logging!
    }
};

module.exports = withContentlayer({ ...nextConfig });
