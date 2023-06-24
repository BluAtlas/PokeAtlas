const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: { output: { chunkFilename: 'js/[name].js?id=[chunkhash]' } },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/PokeAtlas/" : "/",
})
