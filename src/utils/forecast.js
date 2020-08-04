const request = require('request')
require('dotenv').config()
const appid = process.env.APP_ID

const forecast = (lat,lon,cb) => {
    const oneCall = "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+appid+"&units=metric&exclude=hourly,minutely"

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



