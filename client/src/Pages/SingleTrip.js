import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";
import { Flex, Badge, Text } from "@chakra-ui/react";
import CommentArea from "../components/CommentArea";
import CommentTextarea from "../components/CommentTextarea";

const SingleTrip = (props) => {
  const { id: tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, { variables: { id: tripId } });

  const trip = data?.trip || {};

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <Flex m='4' p='2' direction='column'>
      <Badge
        borderRadius="full"
        px="12"
        fontSize="md"
        size="md"
        rounded="md"
        color={["primary.500", "primary.500", "white", "white"]}
        bg={["white", "white", "primary.500", "primary.500"]}
        _hover={{
          bg: ["primary.100", "primary.100", "primary.400", "primary.400"],
        }}
      >
        {trip.tripName}
      </Badge>
      <Text>Details: {trip.tripDetails}</Text>
      <Text>Destination: {trip.tripDestination}</Text>
      <Text>Departure: {trip.tripDeparture}</Text>
      <Text>Return: {trip.tripReturn}</Text>
      <b>----- Communication Box -----</b>
      <CommentTextarea tripId={trip._id} />
      <b>----- Communication Board -----</b>
      <CommentArea comments={trip.tripComments} />
    </Flex>
  );
};

export default SingleTrip;
