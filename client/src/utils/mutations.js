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
  mutation addTrip($tripName: String!, $tripDetails: String!, $tripDestination: String, $tripCoordinates: String, $tripDeparture: String, $tripReturn: String, $username: String) {
    addTrip(tripName: $tripName, tripDetails: $tripDetails, tripDestination: $tripDestination, tripCoordinates: $tripCoordinates, tripDeparture: $tripDeparture, tripReturn: $tripReturn, tripCompanion: $username) {
      _id
      tripName
      tripDetails
      tripDestination
      tripCoordinates
      tripDeparture
      tripReturn
      tripCompanion {
        _id
        username
        email
      }
    }
  }
`

export const ADD_COMMENT = gql`
  mutation addComment($tripId: ID!, $commentText: String!, $username: String!) {
    addComment(tripId: $tripId, commentText: $commentText, username: $username) {
      _id
      tripName
      tripDetails
      tripDestination
      tripDeparture
      tripReturn
      tripCompanion {
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
      tripCompanion {
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