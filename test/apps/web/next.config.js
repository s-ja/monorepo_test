const stylexPlugin = require("@stylexjs/nextjs-plugin");

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ["@repo/ui"],
};

module.exports = stylexPlugin({
  rootDir: __dirname,
})({});
