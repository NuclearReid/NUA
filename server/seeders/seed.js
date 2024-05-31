const db = require('../config/connection');
const {Complaint} = require('../models');
const grievanceSeeds = require('./grievanceSeeds.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Complaint', 'complaints');
        await Complaint.create(grievanceSeeds);

        console.log('seeding sowed!');
        process.exit(0);
    } catch (error) {
        throw error;
    }
})