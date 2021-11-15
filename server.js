const serve = require('koa-static')
const Koa = require('koa')
const app = new Koa()
const port = 4000

// response
app.use(serve('dist'))

app.listen(port, () => {
  console.log(`Circle server listening at http://localhost:${port}`)
})
