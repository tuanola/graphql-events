const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const eventSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    dateFrom: {
        type: Date,
    },
    dateTo: {
        type: Date,
    },
    place: {
        type: Schema.Types.ObjectId,
        ref: 'Place'
    },
    persons: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Person'
        }
    ]
});

module.exports = mongoose.model('Event', eventSchema);
