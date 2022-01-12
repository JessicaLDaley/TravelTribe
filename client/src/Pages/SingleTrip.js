import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_TRIP } from "../utils/queries";
import { Flex } from "@chakra-ui/react";
import CommentArea from "../components/SingleTrip/CommentArea";
import CommentTextarea from "../components/SingleTrip/CommentTextarea";
import TripDetails from "../components/SingleTrip/TripDetails";
import Timeline from "../components/Timeline";

const SingleTrip = (props) => {
  const { id: tripId } = useParams();

  const { loading, data } = useQuery(QUERY_TRIP, { variables: { id: tripId } });

  const trip = data?.trip || {};
  document.title = `${trip.tripName} | TravelTribe Trip`;

  if (loading) {
    return <div> Loading ... </div>;
  }

  return (
    <Flex direction={["column", "column", "row"]} paddingX={3} maxWidth="100vw" maxHeight="75vh">
      <TripDetails trip={trip}/>
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