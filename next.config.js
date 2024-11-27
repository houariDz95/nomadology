/** @type {import('next').NextConfig} */

const {withContentlayer} = require("next-contentlayer")

const nextConfig = {
    compiler:{
        removeConsole: true,
    },
    compiler:{
        removeConsole: false, // ❗️❗️❗️❗️❗️ this removes the logging!
    }
};

module.exports = withContentlayer({ ...nextConfig });
