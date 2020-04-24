/*
const Person = require('./person');

const person1 = new Person('Erhan Koral', 37);

person1.greeting();

*/

const Logger = require('./logger_sample');
const logger = new Logger();

logger.on('message', data => console.log('called listener', data));

logger.log('Hello World'); //console.log değil dikkat!!! logger.log 