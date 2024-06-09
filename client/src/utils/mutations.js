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

export const ADD_COMPLAINT = gql` 
  mutation Mutation(
      $firstName: String 
      $lastName: String 
      $email: String 
      $phoneNumber: String
      $date: Date
      $time: String 
      $grievance: String 
      $namesOfInvolved: String 
      $description: String
      $impact: String
      $suggestions: String 
      $confidentiality: String
    ) {
    addComplaint(
      firstName: $firstName 
      lastName: $lastName 
      email: $email 
      phoneNumber: $phoneNumber 
      date: $date 
      time: $time 
      grievance: $grievance 
      namesOfInvolved: $namesOfInvolved 
      description: $description 
      impact: $impact 
      suggestions: $suggestions 
      confidentiality: $confidentiality
    ) {
      _id
    }
  }
`;

export const DELETE_COMPLAINT = gql`
  mutation DeleteComplaint($_id: ID) {
    deleteComplaint(_id: $_id) {
      _id
      firstName
      lastName
    }
  }
`;

export const OPERATOR_APPLICATION = gql`
  mutation OperatorApplication(
    $email: String
    $name: String
    $over21: String
    $phoneNumber: String
    $resident: String
    $nightOwl: String
    $monday: String
    $tuesday: String
    $wednesday: String
    $thursday: String
    $friday: String
    $saturday: String
    $sunday: String
    $sud: String
    $facebook: String
    $firstPerson: String
    $harmReductionExp: String
    $harmReductionExplain: String
    $mandatedReporter: String
    $recovery: String
    $endGoal: String
    $specialSkills: String
    $why: String
  ) {
    addApplication(
      email: $email
      name: $name
      over21: $over21
      phoneNumber: $phoneNumber
      resident: $resident
      nightOwl: $nightOwl
      monday: $monday
      tuesday: $tuesday
      wednesday: $wednesday
      thursday: $thursday
      friday: $friday
      saturday: $saturday
      sunday: $sunday
      SUD: $sud
      facebook: $facebook
      firstPerson: $firstPerson
      harmReductionEXP: $harmReductionExp
      harmReductionExplain: $harmReductionExplain
      mandatedReporter: $mandatedReporter
      recovery: $recovery
      endGoal: $endGoal
      specialSkills: $specialSkills
      why: $why
    ) {
      _id
      email
      name
      over21
      phoneNumber
      resident
      nightOwl
      monday
      tuesday
      wednesday
      thursday
      friday
      saturday
      sunday
      SUD
      facebook
      firstPerson
      harmReductionEXP
      harmReductionExplain
      mandatedReporter
      recovery
      endGoal
      specialSkills
      why
    }
  }
`