import React from "react";
import { Link } from 'react-router-dom';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    } from '@chakra-ui/react'

function UpcomingTrips({ trips }) {
    return (
      
        <Table size="md"justifyContent="center" variant='striped'>
            {trips.map(trip => (
                <div key={trip._id}>
                    <Thead>
                        <Tr>

                            <Th border="outset" fontSize="sm" color="primary.500" >Trip Name</Th>
                            <Th border="outset" fontSize="sm" color="primary.500" >Trip Details</Th>
                            <Th border="outset" fontSize="sm" color="primary.500">Trip Destination</Th>
                            <Th border="outset" fontSize="sm" color="primary.500">Trip Departure</Th>
                            <Th border="outset" fontSize="sm" color="primary.500" >Trip Return</Th>
                            <Th border="outset" fontSize="sm" color="primary.500" >Trip Companions</Th>

                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td border="outset"> <Link to={`./trip/${trip._id}`}>{trip.tripName}</Link></Td>
                            <Td border="outset">{trip.tripDetails}</Td>
                            <Td border="outset">{trip.tripDestination}</Td>
                            <Td border="outset">{trip.tripDeparture}</Td>
                            <Td border="outset">{trip.tripReturn}</Td>
                            <Td border="outset">{trip.tripCompanions}</Td>
                        </Tr>
                    </Tbody>
                  
                </div>
            ))}
        </Table>
  
    );
}

export default UpcomingTrips;