var Koa = require('koa');
var Router = require('koa-router');

var app = new Koa();
var router = new Router();

function getAngleBetweenHourAndMinuteHands(hourHand, minuteHand)  
{  
    if ((hourHand < 0 || minuteHand < 0) ||
        (hourHand > 12 || minuteHand > 60)) {
        ctx.throw(500,'Invalid hour or minute hand location.')
    }

    if (minuteHand == 60) { 
        minuteHand = 0
        hourHand += 1
    }  

    hourHand = hourHand % 12                        // If we added to the hour hand past 12 then reset back to < 12
  
    const hourAngle = 30.0 * hourHand               // Each hour is 30 degrees apart (360/2)
    const hourPlusMinutesAngle = 0.5 * minuteHand   // Every minute that goes by the hour hand moves little further as well
    const minutesAngles = 6.0 * minuteHand          // Each minute is 6 degrees apart (360/60)
  
    let angle = Math.abs(hourPlusMinutesAngle + hourAngle - minutesAngles) // Get the diffference between the hour hand location and the minute hand location
  
    return angle
}  

router.get('/angle', (ctx, next) => {
  const hourHand = ctx.request.query["hour"]
  const minuteHand = ctx.request.query["min"]
  ctx.body = {angle: getAngleBetweenHourAndMinuteHands(hourHand, minuteHand)}
});

app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3000);