import React from "react";
import TripModal from "../TripForm/TripModal";
import UpcomingTrips from "../UpcomingTrips";
import FriendsList from "../FriendsList";
import {Flex} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../../utils/queries';

function Dashboard() {
  document.title = 'Dashboard';

  const {loading, error, data} = useQuery(QUERY_ME);
  const user = data?.me;
  console.log(user);

  return (
    <Flex direction="column">
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