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
        phoneNumber: Int
        date: Date
        time: String
        grievance: String
        namesOfInvolved: String
        description: String
        impact: String
        suggestions: String
        confidentiality: String
    }

    type Auth {
        token: String
        User: User
    }

    type Query{
        users: [User]
        me: User
        admin: User
    }

    type Mutation {
        addUser(
            email: String!
            password: String!
            #foo: [ID]
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

    }
`;

module.exports = typeDefs;