const fs = require('fs');

const book = {
    title: "wdo is the ecemy",
    author: 'Ryan Holiday'
}

const bookJSON = JSON.stringify(book);

fs.writeFileSync('experiment.json', bookJSON);
const dataBuffer = fs.readFileSync('experiment.json');
console.log(dataBuffer.toString());