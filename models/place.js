const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const placeSchema = new Schema ({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
});

module.exports = mongoose.model('Place', placeSchema);
