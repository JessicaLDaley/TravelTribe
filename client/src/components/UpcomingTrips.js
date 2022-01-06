import React from "react";
import {Flex} from '@chakra-ui/react';

function UpcomingTrips({trips}){
    return(
        <Flex display="column">
            {trips.map(trip => (
                <div key={trip._id}>
                    <p>{trip.tripName}</p>
                    <p>{trip.tripDetails}</p>
                    <p>{trip.tripDestination}</p>
                    <p>{trip.tripDeparture}</p>
                    <p>{trip.tripReturn}</p>
                </div>
            ))}
        </Flex>
    );
}

export default UpcomingTrips;