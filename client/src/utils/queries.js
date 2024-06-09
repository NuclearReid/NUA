import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query Me {
        me {
            _id
            email
        }
    }
`;

export const QUERY_ADMIN = gql`
    query Admin {
        admin {
            email
            callsRecieved
            peopleServed
            reversals
        }
    }
`;

export const QUERY_COMPLAINT = gql`
    query Complaint {
        complaints {
            _id
            firstName
            lastName
            email
            phoneNumber
            date
            time
            grievance
            namesOfInvolved
            description
            impact
            suggestions
            confidentiality
        }
    }
`;

export const QUERY_APPLICATION = gql`
    query Application {
        applications {
            _id
            email
            name
            over21
            phoneNumber
            resident
            nightOwl
            available
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
`;