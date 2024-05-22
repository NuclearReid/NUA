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