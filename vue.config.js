const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: { output: { filename: '[name].[fullhash].bundle.js' } },
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === "production" ? "/PokeAtlas/" : "/",
})
