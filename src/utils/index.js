const yargs = require("yargs");

const add = (argv) =>{
    if(argv.add){
        console.log('Movie added')
    }
}
add(yargs.argv)