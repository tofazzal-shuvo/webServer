const fs = require('fs');
const yargs = require('yargs');


console.log(yargs.argv);

yargs.command({
    command: 'add',
    describe: 'add a note',
    builder:{
        title:{
            describe: "node node node"
        }
    },
    handler: function(argv){
        console.log("khgkjhkj");
    } 
}).parse();
const first="first";
console.log(first);
debugger;
const second = "second";
console.log(second);

