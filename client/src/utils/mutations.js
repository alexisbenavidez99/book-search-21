import { gpl } from '@apollo/client';

export const LOGIN_USER = gpl`
  mutation loginUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
        email
        password
    }
  }
`;

export const ADD_USER = gpl`
  mutation addUser($_id: String!, $username: String!, $email: String!, $password: String!) {
    addUser(_id: $_id, username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
    }
  }
`;

export const SAVE_BOOK = gpl`
  mutation saveBook($authors: [Authors], $description: String!, $title: String!, $bookId: Int!, $image: String, $link: String) {
    saveBook(authors: $[Authors], description: $description, title: $title, bookId: $bookId, image: $image: link: $link) {
       authors
       description
       title
       bookId
       image
       link 
    }
  }
`;

export const REMOVE_BOOK = gpl`
  mutation removeBook($bookId: Int!) {
    removeBook(bookId: $bookId) {
        bookId
    }
  }
`;