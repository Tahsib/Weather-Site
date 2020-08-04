const request = require('request')
require('dotenv').config()
const access_token= process.env.ACCESS_TOKEN

const geocode = (address,cb)=>{
    
    const map = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token="+access_token+"&limit=1"
    
    request({url:map, json:true},(error,{body})=>{
        if(error){
           cb('Unable to connect to location services!',undefined);
        } else if( body.features.length === 0){
            cb('Unable to find location. Try another search.',undefined);
        } else {
            cb(undefined,{
                latitude : body.features[0].center[1],
                longitude : body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode