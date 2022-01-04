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
      }
      companionCount
      companions {
        _id
        username
      }
    }
  }
`