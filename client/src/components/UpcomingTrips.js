import React from "react";
import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
} from '@chakra-ui/react'

function UpcomingTrips({ trips }) {
    return (
        <Table variant='simple'>
           {trips.map(trip => (
                <div key={trip._id}>
            <Tr>
          
                <Th fontSize="sm">Trip Name</Th>
                <Th fontSize="sm">Trip Details</Th>
                <Th fontSize="sm">Trip Destination</Th>
                <Th fontSize="sm">Trip Departure</Th>
                <Th fontSize="sm">Trip Return</Th>
                <Th fontSize="sm">Trip Companions</Th>
                
            </Tr>
         
           
                   

                    <Tbody>
<Tr>
    <Td> <Link to={`./trip/${trip._id}`}>{trip.tripName}</Link></Td>
<Td>{trip.tripDetails}</Td>
<Td>{trip.tripDestination}</Td>
<Td>{trip.tripDeparture}</Td>
<Td>{trip.tripReturn}</Td>
</Tr>
</Tbody>
                </div>
            ))}
        </Table>
    );
}

export default UpcomingTrips;