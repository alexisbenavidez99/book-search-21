const { gpl } = require('apollo-server-express');

const typeDefs = gpl`
type Query {
  me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(authors: [String!], description: String!, title: String!, bookId: Int!, image: String, link: String): User
    removeBook(bookId: Int): User
}

type User {
    _id: ID!
    username: String!
    email: String!
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: Int!
    authors: authors[String!]
    description: String!
    title: String!
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}
`;

module.exports = typeDefs;