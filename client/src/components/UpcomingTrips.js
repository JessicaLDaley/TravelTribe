import React from "react";
import {Flex} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function UpcomingTrips({trips}){
    return(
        <Flex display="column">
            {trips.map(trip => (
                <div key={trip._id}>
                    <Link to={`./trip/${trip._id}`}>{trip.tripName}</Link>
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