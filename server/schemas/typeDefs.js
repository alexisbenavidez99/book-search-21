const { gpl } = require('apollo-server-express');

const typeDefs = gpl`
type Query {
  me: [User]!
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook([Authors], description: String!, input: title, bookId: Int!, image: String, link: String): User
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
    authors: [Authors]
    description: String!
    title: String!
    image: String
    link: String
}
`;

module.exports = typeDefs;