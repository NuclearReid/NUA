const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type User {
        _id: ID
        email: String!
        password: String!
        callsRecieved: Int
        peopleServed: Int
        reversals: Int
    }

    type Complaint {
        _id: ID
        firstName: String
        lastName: String
        email: String
        phoneNumber: String
        date: Date
        time: String
        grievance: String
        namesOfInvolved: String
        description: String
        impact: String
        suggestions: String
        confidentiality: String
    }

    type Application {
        _id: ID
        email: String
        name: String
        over21: String
        phoneNumber: String
        resident: String
        nightOwl: String
        monday: String
        tuesday: String
        wednesday: String
        thursday: String
        friday: String
        saturday: String
        sunday: String
        SUD: String
        facebook: String
        firstPerson: String
        harmReductionEXP: String
        harmReductionExplain: String
        mandatedReporter: String
        recovery: String
        endGoal: String
        specialSkills: String
        why: String
        mandysLine: String
    }

    type Auth {
        token: String
        User: User
    }

    type Query{
        users: [User]
        me: User
        admin: User
        complaints: [Complaint]
        applications: [Application]
    }

    type Mutation {
        addUser(
            email: String!
            password: String!
        ): Auth

        login(
            email: String!
            password: String!
        ): Auth

        setStats(
            callsRecieved: Int
            peopleServed: Int
            reversals: Int
        ): User

        addComplaint(
            firstName: String
            lastName: String
            email: String
            phoneNumber: String
            date: Date
            time: String
            grievance: String
            namesOfInvolved: String
            description: String
            impact: String
            suggestions: String
            confidentiality: String
        ): Complaint

        addApplication(
            email: String
            name: String
            over21: String
            phoneNumber: String
            resident: String
            nightOwl: String
            monday: String
            tuesday: String
            wednesday: String
            thursday: String
            friday: String
            saturday: String
            sunday: String
            SUD: String
            facebook: String
            firstPerson: String
            harmReductionEXP: String
            harmReductionExplain: String
            mandatedReporter: String
            recovery: String
            endGoal: String
            specialSkills: String
            why: String
            mandysLine: String
        ): Application

        deleteComplaint(
            _id: ID
        ): Complaint

        deleteApplication(
            _id: ID
        ): Application
    }
    scalar Date
`;

module.exports = typeDefs;