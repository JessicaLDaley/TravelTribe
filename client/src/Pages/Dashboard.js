import React from "react";
import TripModal from "../components/TripForm/TripModal";
import UpcomingTrips from '../components/UpcomingTrips';
import FriendsList from "../components/FriendsList";
import Timeline from '../components/Timeline';
import { Flex } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {
  document.title = 'Dashboard';

  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <Flex direction={["column", "column", "row"]} paddingX={3} maxWidth="100vw">
      <Flex width={["100%", "100%", "20%"]}>
        {loading ? (
          <div />
        ) : (
          <UpcomingTrips trips={user?.trips} />
        )}
      </Flex>
      <Flex direction="column" width={["100%", "100%", "60%"]} paddingX={[0, 0, 3]} display={['none', 'none', 'flex']}>
        <TripModal friends={user?.friends} />
        <Timeline />
      </Flex>
      <Flex width={["100%", "100%", "20%"]} display={['none', 'none', 'flex']}>
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