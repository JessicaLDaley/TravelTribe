import React from "react";
import TripModal from "../TripForm";
import UpcomingTrips from "../UpcomingTrips";
import {Flex} from '@chakra-ui/react';

function Dashboard() {
  document.title = 'Dashboard';
  return (
    <Flex direction="column">
      <TripModal/>
      <UpcomingTrips/>
    </Flex>
  );
}

export default Dashboard;