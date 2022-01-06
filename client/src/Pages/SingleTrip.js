import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TRIP } from '../utils/queries';
import {Flex} from '@chakra-ui/react';
import CommentArea from '../components/CommentArea';
import CommentTextarea from '../components/CommentTextarea';

const SingleTrip = props => {
  const { id: tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, { variables: { id: tripId }})

  const trip = data?.trip || {}

  if (loading) {
    return <div> Loading ... </div>
  }

  return (
    <Flex direction='column'>
      <p>{trip.tripName}</p>
      <p>{trip.tripDetails}</p>
      <p>{trip.tripDestination}</p>
      <p>{trip.tripDeparture}</p>
      <p>{trip.tripReturn}</p>
      ----- Communication Box -----
      <CommentTextarea tripId={trip._id}/>
      ----- Communication Board -----
      <CommentArea comments={trip.tripComments}/>
    </Flex>
  )
}

export default SingleTrip
