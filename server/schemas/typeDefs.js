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
        location: String
        nightOwl: String
        available: [String]
        SUD: String
        facebook: String
        firstPerson: String
        harmReduction: String
        harmReductionEXP: String
        mandatedReporter: String
        recovery: String
        endGoal: String
        specialSkills: String
        why: String
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

        deleteComplaint(
            _id: ID
        ): Complaint
    }
    scalar Date
`;

module.exports = typeDefs;