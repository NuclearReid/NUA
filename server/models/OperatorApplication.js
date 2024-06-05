const {Schema, model } = require('mongoose');

const applicationSchema = new Schema({
    email: {
        type: String,
        Required: true,
    },
    name: {
        type: String,
        Required: true,
    },
    over21: {
        type: String,
        Required: true,
    },
    phoneNumber: {
        type: String,
        Required: true,
    },
    location: {
        type: String,
        Required: true,
    },
    nightOwl: {
        type: String,
        Required: true,
    },
    available: [{
        monday: String,
        tuesday: String,
        wednesday: String,
        thursday: String,
        friday: String,
        saturday: String,
        sunday: String
    }],
    SUD: String,
    facebook: String,
    firstPerson: {
        type: String,
        required: true,
    },
    harmReduction: {
        type: String,
        required: true,
    },
    harmReductionEXP: String,
    treatmentCenter: String,
    mandatedReporter: String,
    recovery: String,
    endGoal: String,
    specialSkills: String,
    why: String
});


const Application = model('Application', applicationSchema);

module.exports = Application