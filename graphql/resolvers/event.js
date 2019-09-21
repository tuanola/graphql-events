const Event = require('../../models/event');

const { transformEvent } = require('./merge');

module.exports = {
    event: async ({ _id }) => {
        try {
            const event = await Event.findById(_id);
            return transformEvent(event);
        } catch (err) {
            throw err;
        }
    }
};
