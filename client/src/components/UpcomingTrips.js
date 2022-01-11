import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Badge, Text, Divider } from "@chakra-ui/react";

function UpcomingTrips({ trips }) {
    return (
        // i need to fix the backgroundcolor to be dynamic with the light/dark but if you're looking at this and its light theme use gray.100 for backgroundColor, darkmode: gray.700
        <Flex direction="column" overflowY="scroll" minWidth="100%" backgroundColor="gray.100" borderRadius="lg">
            <Box background="primary.400" borderTopRadius="md" py="2" fontSize="sm" color="white" textAlign="center" textTransform="uppercase" fontWeight="bold">Upcoming Trips</Box>
            {trips.map(trip => (
                <Box px="1" textAlign="center" key={trip._id}>
                    <Badge
                        textAlign="center"
                        as={Link}
                        to={`./trip/${trip._id}`}
                        minWidth="90%"
                        rounded="md"
                        fontSize='md'
                        my="2"
                        py="1"
                        color="gray.600"
                        _hover={{ bg: ["primary.100", "primary.100", "primary.400", "primary.400"] }}>
                        {trip.tripName}
                    </Badge>
                    <Box textAlign="left" pl="5" fontWeight='semibold' color='gray.600'>
                        <Text>{trip.tripDetails}</Text>
                        <Text>Destination: {trip.tripDestination}</Text>
                        <Text fontSize='md'>Leaving on {trip.tripDeparture}</Text>
                        <Text fontSize='md'>Returning on {trip.tripReturn}</Text>
                        <Text fontSize='sm'>{trip.commentCount} messages and {trip.companionCount} companions</Text>
                    </Box>
                    <Divider my="2"/>
                </Box>
            ))}
        </Flex>
    )
}

export default UpcomingTrips;