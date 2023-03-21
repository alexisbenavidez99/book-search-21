import { gpl } from '@apollo/client';

export const GET_ME = gpl`
query me {
    user {
        _id
        username
        email
        password
        savedBooks
    }
}
`;