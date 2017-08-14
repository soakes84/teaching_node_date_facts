const chalk = require('chalk');
const moment = require('moment');

function dateFacts() {
    console.log("It is " + chalk.blue(moment().format('LLLL')));
    console.log("It is the " + chalk.yellow(moment().dayOfYear()) + "th day of the year");
    console.log("It is " + chalk.gray(moment().seconds()) + " seconds into the minute");
    console.log("It " + chalk.green("is") + " during daylight savings time");
    console.log("It " + chalk.cyan("is not") + " not a leap year");
}

module.exports = dateFacts;