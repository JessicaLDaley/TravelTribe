import React from "react";
import TripModal from "../TripForm";
import UpcomingTrips from "../UpcomingTrips";
import {Flex} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../../utils/queries';

function Dashboard() {
  document.title = 'Dashboard';

  const {loading, error, data} = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <Flex direction="column">
      <TripModal/>
      {loading? (
        <div/>
      ) : (
        <UpcomingTrips trips={user.trips}/>
      )}
    </Flex>
  );
}

export default Dashboard;