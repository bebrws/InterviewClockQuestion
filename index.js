var Koa = require('koa');
var Router = require('koa-router');
var getAngleBetweenHourAndMinuteHands = require('./angles');

var app = new Koa();
var router = new Router();

router.get('/angle', (ctx, next) => {
  const hourHand = Number(ctx.request.query["hour"])
  const minuteHand = Number(ctx.request.query["min"])
  ctx.body = {angle: getAngleBetweenHourAndMinuteHands(hourHand, minuteHand)}
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);