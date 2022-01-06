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
        <Table variant='simple'>
            {trips.map(trip => (
                <div key={trip._id}>
                    <Thead>
                        <Tr>

                            <Th fontSize="sm" color="white" background="primary.500">Trip Name</Th>
                            <Th fontSize="sm" color="white" background="primary.500">Trip Details</Th>
                            <Th fontSize="sm" color="white" background="primary.500">Trip Destination</Th>
                            <Th fontSize="sm" color="white" background="primary.500">Trip Departure</Th>
                            <Th fontSize="sm" color="white" background="primary.500">Trip Return</Th>
                            <Th fontSize="sm" color="white" background="primary.500">Trip Companions</Th>

                        </Tr>
                    </Thead>
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