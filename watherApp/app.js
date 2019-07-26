const request = require('request');
const chalk = require('chalk');
const geocode = require('./utils/geocode');
const wather = require('./utils/wather');


if(process.argv.length < 3){
    console.log("Please provide a location");
}
else{
    geocode(process.argv[2],(error, data)=>{
        if(error){
            console.log(error, data);
        }else{
            console.log(chalk.red.bold(`Location: ${data.location}`));
            wather(data.latitude, data.longitude, (err, data)=>{
                if(err){
                    console.log(err);
                }else{
                    console.log(chalk.magenta(data.summary));
                    console.log(chalk.blue(`Current Temperature: ${data.temperature}`));
                    console.log(chalk.cyan(`${data.precipProbability}% probability to rain`));
                }
            });
        }
    });
}
