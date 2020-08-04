const request = require('request');

const forecast = (lat,lon,cb) => {
    const oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid=af7079c635c972cb7c693b97900efca4&units=metric&exclude=hourly,minutely"

    request({url: oneCall, json:true}, (error,{body})=>{
        if(error){
            cb('Unable to connect to weather service',undefined);
        } else if(body.message){
            cb('Unable to find location',undefined);
        } else{
            cb(undefined,'It is currently '+body.current.temp+' degrees out. Weather is '+body.current.weather[0].description+'.')
        }
    })
}

module.exports = forecast



