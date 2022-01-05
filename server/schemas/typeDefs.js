const { gql } = require('apollo-server-express')

const typeDefs = gql`

type User {
  _id: ID
  username: String
  email: String
  trips: [Trip]
  tripCount: Int
  companions: [User]
  companionCount: Int
}

type Trip {
  _id: ID
  tripName: String
  tripDetails: String
  tripDestination: String
  tripCoordinates: String
  commentCount: Int
  tripComments: [Comment]
  companionCount: Int
  tripCompanions: [User]
  tripDeparture: String
  tripReturn: String
  placesCount: Int
  placesToSee: [Places]
  pictureCount: Int
  pictureAlbum: [Album]
}

type Comment {
  _id: ID
  commentText: String
  createdAt: String
  username: String
}

type Places {
  _id: ID
  placeName: String
  placeType: String
  placeKML: String
}

type Album {
  pictureId: String
  tripName: String
  username: String
  createdAt: String
}

type Query {
  me: User
  users: [User]
  user(username: String!): User
  trips(username: String!): [Trip]
  trip(_id: ID!): Trip
}

type Mutation {
  login(email: String!, password: String!): Auth
  addUser(username: String!, email: String!, password: String!): Auth
  addTrip(tripName: String!, tripDetails: String!, tripDestination: String, tripCoordinates: String, tripDeparture: String, tripReturn: String): Trip
  addCompanion(tripId: ID!, username: String!): Trip
  addComment(tripId: ID!, commentText: String!, username: String!): Trip 
  addPlaces(tripId: ID!, placeName: String!, placeType: String!): Trip
  addPicture(tripId: ID!, pictureId: String!, tripName: String!, username: String!): Trip
}

type Auth {
  token: ID!
  user: User
}
`

module.exports = typeDefs