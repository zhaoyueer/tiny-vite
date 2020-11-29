function moduleRewritePlugin({ app, root }) {
  app.use(async (ctx, next) => {
    await next()

    // 获取流中的数据
    let content = readBody(ctx.body)

    // 重写内容，将重写后的结果返回
    
  })
}

exports.moduleRewritePlugin = moduleRewritePlugin