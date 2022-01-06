import React from "react";
import TripModal from "../TripForm";
import UpcomingTrips from "../UpcomingTrips";
import FriendsList from "../FriendsList";
import {Flex, Table,Thead,Tbody,Tr, Th,Td,} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { QUERY_ME } from '../../utils/queries';


function Dashboard() {
  document.title = 'Dashboard';

  const { loading, error, data } = useQuery(QUERY_ME);
  const user = data?.me;

  return (
    <Flex direction="column">
      <TripModal />
      {loading ? (
        <div />
      ) : (
        <Flex>
          <UpcomingTrips trips={user.trips} />

          {/* Table Creation */}
          <Table variant='simple'>
            <Thead>
              <Tr>
                <Th>Trip Name</Th>
                <Th>Description</Th>
                <Th>Destination</Th>
                <Th isNumeric>Start Date - End Date</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td isNumeric></Td>
              </Tr>
            </Tbody>
          </Table>

          {/* End Table */}
          <FriendsList user={user} />
        </Flex>
      )}
    </Flex>
  );
}

export default Dashboard;