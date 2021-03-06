const path = require('path');
const express = require('express');

const app = express();
const pubDirPath = path.join(__dirname, '..', 'public');

app.set('view engine', 'hbs');
app.use(express.static(pubDirPath));

app.get('/weather', (req, res)=>{
    res.send({
        forecast: "20 deg/cel",
        location: 'sylhet'
    });
});

app.listen(3000, ()=>{
    console.log(`Server is running on port 3000`);  
});