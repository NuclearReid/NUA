import { gql } from '@apollo/client';

export const ADD_USER = gql`
    mutation addUser(
        $email: String!
        $password: String!
    ) {
        addUser(
            email: $email
            password: $password
        ) {
            token
            User {
                _id
            }
        }
    }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      User {
        email
      }
    }
  }
`;

export const SET_STATS = gql`
  mutation Set_Stats(
      $callsRecieved: Int 
      $peopleServed: Int 
      $reversals: Int
    ) {
    setStats(
      callsRecieved: $callsRecieved 
      peopleServed: $peopleServed 
      reversals: $reversals
    ) {
      email
      callsRecieved
      peopleServed
      reversals
    }
  }
`;