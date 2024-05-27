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
