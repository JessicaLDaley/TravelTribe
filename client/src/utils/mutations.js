import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_TRIP = gql`
  mutation addTrip($tripName: String!, $tripDetails: String!, $tripDestination: String, $tripCoordinates: [Float], $tripDeparture: String, $tripReturn: String, $tripCompanions: [ID]) {
    addTrip(tripName: $tripName, tripDetails: $tripDetails, tripDestination: $tripDestination, tripCoordinates: $tripCoordinates, tripDeparture: $tripDeparture, tripReturn: $tripReturn, tripCompanions: $tripCompanions) {
      _id
      tripName
      tripDetails
      tripDestination
      tripCoordinates
      tripDeparture
      tripReturn
      tripCompanions {
        _id
        username
        email
      }
    }
  }
`

export const ADD_COMMENT = gql`
  mutation addComment($tripId: ID!, $commentText: String!) {
    addComment(tripId: $tripId, commentText: $commentText) {
      _id
      tripName
      tripDetails
      tripDestination
      tripDeparture
      tripReturn
      tripCompanions {
        _id
        username
        email
      }
      tripComments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`;

export const ADD_COMPANION = gql`
  mutation addCompanion($tripId: ID!, $userId: String!) {
    addCompanion(tripId: $tripId, userId: $userId){
      _id
      tripName
      tripDetails
      tripDestination
      tripDeparture
      tripReturn
      tripCompanions {
        _id
        username
        email
      }
      tripComments {
        _id
        commentText
        username
        createdAt
      }
    }
  } 
`

export const ADD_FRIEND = gql`
  mutation addFriend($id: ID!) {
    addFriend(friendId: $id) {
      _id
      username
      companionCount
      friends {
        _id
        username
      }
    }
  }
`;