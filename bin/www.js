#! /usr/bin/env node
// 可以运行的脚本


// 创建一个koa服务

const createServer = require('../index')
createServer().listen(4000, () => {
  console.log('server start 4000 port')
})