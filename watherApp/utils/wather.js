const request = require('request');

const wather = (latitude, longitude,callback)=>{
    const url = `https://api.darksky.net/forecast/6e30ab78bc490a384ad8503ea4c9b403/${latitude},${longitude}?units=si`;
    request({url, json: true},(error, res)=>{
        if(error){
            callback('Unable to connect to wather-api');
        }else if(res.body.error){
            callback('Unable to find your location. Try another search')
        }else{
            callback(null, {
                summary: res.body.daily.summary,
                temperature: res.body.currently.temperature,
                precipProbability: res.body.currently.precipProbability
            });
        }
    });
}

module.exports = wather;