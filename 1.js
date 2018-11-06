const Koa = require('koa');
const aa=require('./2')
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello World';
});
aa.hello();
aa.hello();
app.listen(3000);

