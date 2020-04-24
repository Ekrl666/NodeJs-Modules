const EventEmmitter = require('events');
//create class
class MyEmitter extends EventEmmitter{}

//init object
const myEmitter = new MyEmitter(); 

//Event listener
myEmitter.on('event', () => console.log('Event Fired'));

//init event
myEmitter.emit('event');