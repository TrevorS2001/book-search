const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Book {
    _id: ID
    title: String
    authors: [String]
    link: String
    description: String
    bookId: String
    image: String
    forSale: String
    }
    type User {
      _id: ID
      email: String
      username: String
      bookCount: Int
      savedBooks:[Book]   
    }
    input SavedBookInput {
       title: String
       link: String
       authors: [String]
       description: String
       bookId: String
       image: String
       forSale: String
    }
    type Query {
       me: User
    }
   type Mutation {
      login(email: String!, password: String!): Auth
      addUser(username: String!, email: String!, password: String!): Auth
      removeBook(bookId: String!): User
      saveBook(book: SavedBookInput): User
   }
    type Auth {
    token: ID!
    user: User
    }
`;

module.exports = typeDefs;