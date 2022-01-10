import React from "react";
import TripModal from "../components/TripForm/TripModal";
import UpcomingTrips from '../components/UpcomingTrips';
import FriendsList from "../components/FriendsList";
import Timeline from '../components/Timeline';
import { SimpleGrid, GridItem } from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../utils/queries';

function Dashboard() {
  document.title = 'Dashboard';

  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <SimpleGrid columns={[1, 5, 5, 5]} spacing={3} paddingX={3}>
      <GridItem colSpan={1} colStart={1}>
        {loading ? (
          <div />
        ) : (
          <UpcomingTrips trips={user?.trips} />
        )}
      </GridItem>
      <GridItem colSpan={3} colStart={2}>
        <TripModal friends={user?.friends} />
        <Timeline/>
      </GridItem>
      <GridItem colSpan={1} colStart={5}>
        {loading ? (
          <div />
        ) : (
          <FriendsList user={user} />
        )}
      </GridItem>
    </SimpleGrid>
  );
}

export default Dashboard;