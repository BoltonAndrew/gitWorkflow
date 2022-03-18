const yargs = require("yargs");

const app = (yargsObj) => {
  try {
    console.log(yargsObj);
  } catch (error) {
    console.log(error);
  }
};

app(yargs.argv);
