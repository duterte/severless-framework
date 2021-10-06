'use strict';
const { eventParser } = require('../module/event-parser');

module.exports.handler = async (event, context) => {
  const parseEvent = eventParser(event);
  return {
    statusCode: 200,
    body: JSON.stringify(parseEvent.body),
  };
};
