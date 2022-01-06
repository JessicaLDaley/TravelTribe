import { gql } from "@apollo/client";

// this is a basic user query, there are a lot more fields available for query
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      tripCount
      trips {
        _id
        tripName
        tripDestination
        tripCoordinates
      }
      companionCount
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      companionCount
      friends {
        _id
        username
        email
      }
      tripCount
      trips {
        _id
        tripName
        tripDetails
        tripDestination
        tripCoordinates
        tripDeparture
        tripReturn
        companionCount
        tripCompanions {
          _id
          username
          email
        }
        commentCount
        tripComments {
          _id
          commentText
          username
          createdAt
        }
      }
    }
  }
`;

export const QUERY_TRIP_DASH = gql`
  query trips($username: String!) {
    trips(username: $username) {
      _id
      tripName
      tripDetails
      tripDestination
      tripCoordinates
      companionCount
      commentCount
      placesCount
      pictureCount
    }
  }
`

export const QUERY_TRIP = gql`
  query trip($id: ID!) {
    trip(_id: $id) {
      _id
      tripName
      tripDetails
      tripDestination
      tripCoordinates
      tripDeparture
      tripReturn
      companionCount
      tripCompanions {
        _id
        username
        email
      }
      commentCount
      tripComments {
        _id
        commentText
        username
        createdAt
      }
    }
  }
`

