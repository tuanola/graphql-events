const Event = require('../../models/event');
const Place = require('../../models/place');
const Person = require('../../models/person');
const { dateToString } = require('../../helpers/date');

const events = async eventIds => {
    try {
        const events = await Event.find({ _id: { $in: eventIds } });
        return events.map(event => {
            return transformEvent(event);
        });
    } catch (err) {
        throw err;
    }
};

const persons = async personIds => {
    try {
        const persons = await Person.find({ _id: { $in: personIds } });
        return persons.map(person => {
            return {
                ...person._doc,
                _id: person.id,
                events: events.bind(this, person._doc.persons)
            };
        });
    } catch (err) {
        throw err;
    }
};

const singleEvent = async eventId => {
    try {
        const event = await Event.findById(eventId);
        return transformEvent(event);
    } catch (err) {
        throw err;
    }
};

const place = async placeId => {
    try {
        const place = await Place.findById(placeId);
        return {
            ...place._doc,
            _id: place.id,
            events: events.bind(this, place._doc.events)
        };
    } catch (err) {
        throw err;
    }
};

const transformEvent = event => {
    return {
        ...event._doc,
        _id: event.id,
        dateFrom: dateToString(event._doc.dateFrom),
        dateTo: dateToString(event._doc.dateTo),
        place: place.bind(this, event.place),
        persons: persons.bind(this, event._doc.persons)
    };
};

exports.transformEvent = transformEvent;
