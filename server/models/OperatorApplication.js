const {Schema, model } = require('mongoose');

const applicationSchema = new Schema({
    email: String,
    name: String,
    over21: String,
    phoneNumber: String,
    resident: String,
    nightOwl: String,
    monday: String,
    tuesday: String,
    wednesday: String,
    thursday: String,
    friday: String,
    saturday: String,
    sunday: String,
    SUD: String,
    facebook: String,
    firstPerson: String,
    harmReductionEXP: String,
    harmReductionExplain: String,
    treatmentCenter: String,
    mandatedReporter: String,
    recovery: String,
    endGoal: String,
    specialSkills: String,
    why: String,
    mandysLine: String
});


const Application = model('Application', applicationSchema);

module.exports = Application