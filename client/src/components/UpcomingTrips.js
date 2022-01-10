import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Badge, Text, Divider } from "@chakra-ui/react";

function UpcomingTrips({ trips }) {
    return (
        <Flex direction="column" overflowY="scroll" minWidth="100%" backgroundColor="gray.700" borderRadius="lg">
            <Box background="primary.400" borderTopRadius="md" py="2" fontSize="sm" color="white" textAlign="center" textTransform="uppercase" fontWeight="bold">Upcoming Trips</Box>
            {trips.map(trip => (
                <Box px="1" textAlign="center">
                    <Badge
                        textAlign="center"
                        as={Link}
                        to={`./trip/${trip._id}`}
                        minWidth="90%"
                        rounded="md"
                        my="2"
                        py="1"
                        _hover={{ bg: ["primary.100", "primary.100", "primary.400", "primary.400"] }}>
                        {trip.tripName}
                    </Badge>
                    <Box textAlign="left" pl="5" fontWeight='semibold'>
                        <Text>{trip.tripDetails}</Text>
                        <Text color='gray.600'>Destination: {trip.tripDestination}</Text>
                        <Text color='gray.600' fontSize='md'>Leaving on {trip.tripDeparture}</Text>
                        <Text color='gray.600' fontSize='md'>Returning on {trip.tripReturn}</Text>
                        <Text color='gray.600' fontSize='sm'>{trip.commentCount} messages and {trip.companionCount} companions</Text>
                    </Box>
                    <Divider my="2"/>
                </Box>
            ))}
        </Flex>
    )
}

export default UpcomingTrips;