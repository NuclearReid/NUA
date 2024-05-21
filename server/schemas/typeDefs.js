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

    type Auth {
        token: String
        User: User
    }

    type Query{
        users: [User]
        me: User
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
        addStats(
            callsRecieved: Int
            peopleServed: Int
            reversals: Int
        ): User
    }
`;

module.exports = typeDefs;