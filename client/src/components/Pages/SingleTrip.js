import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_TRIP } from '../../utils/queries';
import {Flex} from '@chakra-ui/react';

const SingleTrip = props => {
  const { id: tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, { variables: { id: tripId }})

  const trip = data?.trip || {}

  if (loading) {
    return <div> Loading ... </div>
  }

  return (
    <Flex>
      {trip.tripName}
    </Flex>
  )
}

export default SingleTrip