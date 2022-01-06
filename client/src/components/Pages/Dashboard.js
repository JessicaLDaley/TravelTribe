import React from "react";
import TripModal from "../TripForm";
import UpcomingTrips from "../UpcomingTrips";
import FriendsList from "../FriendsList";
import {Flex} from '@chakra-ui/react';
import {useQuery} from '@apollo/client';
import {QUERY_ME} from '../../utils/queries';
import { getCountries } from "../../utils/worldData";

function Dashboard() {
  document.title = 'Dashboard';

  const {loading, error, data} = useQuery(QUERY_ME);
  const user = data?.me;
  console.log(user);
  let countries = getCountries();

  return (
    <Flex direction="column">
      <TripModal friends={user?.friends} countries={countries}/>
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