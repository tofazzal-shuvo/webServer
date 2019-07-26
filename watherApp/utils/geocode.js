const  request = require("request");

const geocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoidG9mYXp6YWxzaHV2byIsImEiOiJjanloYnV0NmcwYTZkM2RtNjFpYTJkZG9kIn0.XoKlQuQYswAbRfyamwABFw&limit=1'
    request({ url, json:true }, (error, res)=>{
        if(error){
            callback('Unable to connect to location services!');
        }else if(res.body.features.length === 0){
            callback('Unable to find your location.Try another search...');
        }else{
            callback(undefined, {
                latitude: res.body.features[0].center[1],
                longitude: res.body.features[0].center[0],
                location: res.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode;