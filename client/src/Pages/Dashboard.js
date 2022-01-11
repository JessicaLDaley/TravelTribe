import React from "react";
import TripModal from "../components/TripForm/TripModal";
import UpcomingTrips from '../components/UpcomingTrips';
import FriendsList from "../components/FriendsList";
import Timeline from '../components/Timeline';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {
  document.title = 'Dashboard | TravelTribe';

  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <Flex direction={["column", "column", "row"]} paddingX={3} maxWidth="100vw" maxHeight="75vh">
      <Flex width={["100%", "100%", "20%"]} maxHeight={["25vh", "25vh", "75vh"]} order={[1, 1, 0, 0]}>
        {loading ? (
          <div />
        ) : (
          <UpcomingTrips trips={user?.trips} />
        )}
      </Flex>
      <Flex direction="column" width={["100%", "100%", "60%"]} paddingX={[0, 0, 3]} order={[0, 0, 1, 1]}>
        <TripModal friends={user?.friends} />
        <Timeline/>
      </Flex>
      <Flex width={["100%", "100%", "20%"]} display={['none', 'none', 'flex']} order={[2, 2, 2, 2]}>
        {loading ? (
          <div />
        ) : (
          <FriendsList user={user} />
        )}
      </Flex>
    </Flex>
  );
}

export default Dashboard;