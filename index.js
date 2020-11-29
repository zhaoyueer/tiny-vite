const Koa = require('koa')
const {serveStaticPlugin} = require('./plugins/serverPluginServeStatic')
const {moduleRewritePlugin} = require('./plugins/serverPluginModuleRewrite')

function createServer() {
  const app = new Koa()
  const root = process.cwd() // 当前根位置

  const context = {
    app,
    root
  }

  // 插件集合
  const resolvePlugins = [
    // 2) 解析import 语法，重写路径
    moduleRewritePlugin,

     // 1）实现静态服务的功能(读取文件，将文件放到ctx.body上)
    serveStaticPlugin
  ]

  resolvePlugins.forEach((plugin) => plugin(context))

  return app
}

module.exports = createServer