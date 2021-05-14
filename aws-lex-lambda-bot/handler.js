'use strict';

const dispatch = require('./dispatch');

module.exports.intents = (event, context, callback) => {
  try {
    console.log(`event.bot.name=${event.bot.name}`);
    dispatch(event, (response) => callback(null, response));
  } catch (err) {
    callback(err);
  }
};


// replacing with a simple callback as this is not a http proxy
// returning the response in a callback to lex
// thus lex sends the event and get a callback as response and if an err just send an error
