'use strict';

const orderCoffee = require('./orderCoffee');

module.exports = function(intentRequest, callback) {
  console.log(`dispatch userId=${intentRequest.userId}, intentName=${intentRequest.currentIntent.name}`);
  const intentName = intentRequest.currentIntent.name;

  if (intentName === 'CoffeeOrder') {
    console.log(intentName + ' was called');
    return orderCoffee(intentRequest, callback);
  }

  throw new Error(`Intent with name ${intentName} not supported`);
}









// takes care of lambda
// here we have the request
// current intent for now just 1 intnet to be managed
//2 -new module - ordercoffee and this will be the module taking care of the intent
