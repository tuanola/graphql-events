const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const personSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Event'
        }
    ]
},
    { "collection": "persons" });

module.exports = mongoose.model('Person', personSchema);
