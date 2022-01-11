import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";
import { Flex, Badge, Text } from "@chakra-ui/react";
import CommentArea from "../components/CommentArea";
import CommentTextarea from "../components/CommentTextarea";
import Timeline from "../components/Timeline";

const SingleTrip = (props) => {
  const { id: tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, { variables: { id: tripId } });

  const trip = data?.trip || {};
  document.title = `${trip.tripName} | Trip`;

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <Flex direction={["column", "column", "row"]} paddingX={3} maxWidth="100vw" maxHeight="75vh">
      <Flex direction="column" width={["100%", "100%", "20%"]} maxHeight={["25vh", "25vh", "75vh"]} order={[1, 1, 0, 0]}>
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
          textAlign="center"
        >
          {trip.tripName}
        </Badge>
        <Text>Details: {trip.tripDetails}</Text>
        <Text>Destination: {trip.tripDestination}</Text>
        <Text>Departure: {trip.tripDeparture}</Text>
        <Text>Return: {trip.tripReturn}</Text>
      </Flex>
      <Flex direction="column" width={["100%", "100%", "60%"]} paddingX={[0, 0, 3]} order={[0, 0, 1, 1]}>
        {/* this timeline is going to contain pictures and stuff from the trip */}
        <Timeline />
      </Flex>
      <Flex direction="column" width={["100%", "100%", "20%"]} display={['none', 'none', 'flex']} order={[2, 2, 2, 2]}>
        {/* need to revise the styling of these two components, going to make it look similar to imessages chat bubbles. going to add the overflow-y scroll to the comment area */}
        <CommentArea comments={trip.tripComments} />
        <CommentTextarea tripId={trip._id} />
      </Flex>
    </Flex>
  );
};

export default SingleTrip;