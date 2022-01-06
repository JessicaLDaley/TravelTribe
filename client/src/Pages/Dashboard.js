import React from "react";
import TripModal from "../components/TripForm/TripModal";
import UpcomingTrips from '../components/UpcomingTrips';
import FriendsList from "../components/FriendsList";
import {Flex} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../utils/queries';

function Dashboard() {
  document.title = 'Dashboard';

  const {loading, error, data} = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <Flex width="120rem"direction="column">
      <TripModal friends={user?.friends}/>
      {loading? (
        <div/>
      ) : (
        <Flex>
          <UpcomingTrips trips={user?.trips}/>
          <FriendsList user={user}/>
        </Flex>
      )}
    </Flex>
  );
}

export default Dashboard;