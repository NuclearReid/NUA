const { Schema, model } = require('mongoose');

const complaintSchema = new Schema({

    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    phoneNumber: {
        type: Number,
    },
    date: {
        type: Date,
        default: Date.now
    },
    time: {
        type: String
    },
    grievance: {
        type: String
    },
    namesOfInvolved: {
        type: String
    },
    description: {
        type: String
    },
    impact: {
        type: String
    },
    suggestions: {
        type: String
    },
    confidentiality: {
        type: String
    }
});

const Complaint = model('Complaint', complaintSchema);

module.exports = Complaint;