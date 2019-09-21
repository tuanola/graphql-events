const eventsResolver = require('./events');
const eventByIdResolver = require('./event');

const rootResolver = {
    ...eventsResolver,
    ...eventByIdResolver,
};

module.exports = rootResolver;
