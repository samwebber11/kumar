// const req=require('./geo.js');
 const req2=require('yargs');

const req1=require('./geo.js');
const req=require('./weather/weather.js');
const arg=req2.options({
  a : {
    demand:true,
    alias:'address',
    describe:'Address whose weather to be find',
    string:true
  }
}).help().alias('help','h').argv;

req1.geocode(arg.address);
var lati=req1.geocode(arg.address).latitude;
var longi=req1.geocode(arg.address).longitude;
req.getweather(lati,longi,(error,weatherResult)=>{
  if(error)
  {
    console.log(error);
  }
  else {
    console.log(JSON.stringify(weatherResult,undefined,2));
  }
});















//3c2b05cebe722e43736e2e23ae726983
