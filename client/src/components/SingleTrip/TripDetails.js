import React from "react";
import {Flex, Badge, Text} from '@chakra-ui/react';

function TripDetails({trip}) {
    return (
        <Flex direction="column" width={["100%", "100%", "20%"]} maxHeight={["25vh", "25vh", "75vh"]} order={[1, 1, 0, 0]}>
            <Badge
                borderRadius="full"
                px="12"
                fontSize="md"
                size="md"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.500", "primary.500"]}
                _hover={{
                    bg: ["primary.100", "primary.100", "primary.400", "primary.400"],
                }}
                textAlign="center"
            >
                {trip.tripName}
            </Badge>
            <Text>Details: {trip.tripDetails}</Text>
            <Text>Destination: {trip.tripDestination}</Text>
            <Text>Departure: {trip.tripDeparture}</Text>
            <Text>Return: {trip.tripReturn}</Text>
        </Flex>
    );
}

export default TripDetails;