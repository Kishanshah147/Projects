'use strict';

const lexResponses = require('./lexResponses');
const databaseManager = require('./databaseManager');

const types = ['latte', 'americano', 'cappuccino', 'expresso'];
const sizes = ['double', 'normal', 'large'];

function buildValidationResult(isValid, violatedSlot, messageContent) {
  if (messageContent == null) {
    return {
      isValid,
      violatedSlot,
    };
  }
  return {
    isValid,
    violatedSlot,
    message: {
      contentType: 'PlainText',
      content: messageContent
    },
  };
}

function validateCoffeeOrder(coffeeTypes, coffeeSize) {
  if (coffeeTypes && types.indexOf(coffeeTypes.toLowerCase()) === -1) {
    return buildValidationResult(false, 'coffee', `We do not have ${coffeeTypes}, would you like a different type of coffee?  Our most popular coffee is americano.`);
  }

  if (coffeeSize && sizes.indexOf(coffeeSize.toLowerCase()) === -1) {
    return buildValidationResult(false, 'size', `We do not have ${coffeeSize}, would you like a different size of coffee? Our most popular size is normal.`);
  }

  if (coffeeTypes && coffeeSize) {
    //Latte and cappuccino can be normal or large
    if ((coffeeTypes.toLowerCase() === 'cappuccino' || coffeeTypes.toLowerCase() === 'latte') &&
      !(coffeeSize.toLowerCase() === 'normal' || coffeeSize.toLowerCase() === 'large')) {
      return buildValidationResult(false, 'size', `We do not have ${coffeeTypes} in that size. Normal or large are the available sizes for that drink.`);
    }

    //Expresso can be normal or double
    if ((coffeeTypes.toLowerCase() === 'expresso') &&
      !(coffeeSize.toLowerCase() === 'normal' || coffeeSize.toLowerCase() === 'double')) {
      return buildValidationResult(false, 'size', `We do not have ${coffeeTypes} in that size. Normal or double are the available sizes for that drink.`);
    }

    //Americano is always normal
    if ((coffeeTypes.toLowerCase() === 'americano') && (coffeeSize.toLowerCase() !== 'normal')) {
      return buildValidationResult(false, 'size', `We do not have ${coffeeTypes} in that size. Normal is the available sizes for that drink.`);
    }
  }

  return buildValidationResult(true, null, null);
}

function buildFulfilmentResult(fullfilmentState, messageContent) {
  return {
    fullfilmentState,
    message: {
      contentType: 'PlainText',
      content: messageContent
    }
  }
}

function fullfilOrder(coffeeTypes, coffeeSize) {
  console.log('fulfilOrder ' + coffeeTypes + ' ' + coffeeSize);

  return databaseManager.saveOrderToDatabase(coffeeTypes, coffeeSize).then((item) => {
    console.log(item.orderId);
    return buildFulfilmentResult('Fulfilled', `Thanks, your orderid ${item.orderId} has been placed and will be ready for pickup in the bar`);
  });
}

module.exports = function(intentRequest, callback) {
  var coffeeTypes = intentRequest.currentIntent.slots.coffee;
  var coffeeSize = intentRequest.currentIntent.slots.size;
  console.log(coffeeTypes + ' ' + coffeeSize);

  const source = intentRequest.invocationSource;

  if (source === 'DialogCodeHook') {
    const slots = intentRequest.currentIntent.slots;
    const validationResult = validateCoffeeOrder(coffeeTypes, coffeeSize);

    if (!validationResult.isValid) {
      slots[`${validationResult.violatedSlot}`] = null;
      callback(lexResponses.elicitSlot(intentRequest.sessionAttributes, intentRequest.currentIntent.name, slots, validationResult.violatedSlot, validationResult.message));
      return;
    }

    //If size is not define then set it as normal
    if (coffeeSize == null) {
      intentRequest.currentIntent.slots.size = 'normal';
    }
    console.log(intentRequest.currentIntent.slots);

    callback(lexResponses.delegate(intentRequest.sessionAttributes, intentRequest.currentIntent.slots));
    return;
  }

  if (source === 'FulfillmentCodeHook') {
    return fullfilOrder(coffeeTypes, coffeeSize).then(fullfiledOrder => {
      callback(lexResponses.close(intentRequest.sessionAttributes, fullfiledOrder.fullfilmentState, fullfiledOrder.message));
      return;
    });
  }
}



//validates dialogcodehook and let it go after the validation.
//2- Now the validation result returns some kind of object with a lot of different elements
//basic javascript in abovei if statements
//if this validation fails, the result constructor returning files, sixe or type is the one that's failed. So what is the violator slots ad what is the message to the user?
//example: If i would say, "I want to order poop" response -  Sorry! we dont have poop would you like to have an Americano, it's our most famous coffee - eicit slots
