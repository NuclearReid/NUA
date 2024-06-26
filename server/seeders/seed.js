const db = require('../config/connection');
const {Complaint, Application} = require('../models');
const grievanceSeeds = require('./grievanceSeeds.json');
const applicationSeeds = require('./applicationSeeds.json')
const cleanDB = require('./cleanDB');

db.once('open', async () => {
    try {
        await cleanDB('Complaint', 'complaints');
        await Complaint.create(grievanceSeeds);
        await Application.create(applicationSeeds);

        console.log('seeding sowed!');
        process.exit(0);
    } catch (error) {
        throw error;
    }
})