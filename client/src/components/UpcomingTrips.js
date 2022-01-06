import React from "react";
import { Link } from "react-router-dom";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Box, Badge } from "@chakra-ui/react";

function UpcomingTrips({ trips }) {
    return (
        <Box maxW='lg' borderWidth='2px' borderRadius='lg'>
            {trips.map((trip) => (
                <Box p='6'>
                    <Box display='flex'>
                        <Badge borderRadius='full' px='12' fontSize='md' size="md"
                            rounded="md"
                            color={["primary.500", "primary.500", "white", "white"]}
                            bg={["white", "white", "primary.500", "primary.500"]}
                            _hover={{
                                bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
                            }}>
                            <Link to={`./trip/${trip._id}`}>{trip.tripName}</Link>
                        </Badge>
                    </Box>
                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        isTruncated
                    >
                        {trip.tripDetails}
                    </Box>
                    <Box>
                        <Box as='span' color='gray.600' fontSize='md'>
                            Destination: {trip.tripDestination}
                        </Box>
                    </Box>
                    <Box display='flex' mt='2' alignItems='left'>
                        Leaving on {trip.tripDeparture}
                        <br />
                        Returning on {trip.tripReturn}
                    </Box>
                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                        {trip.commentCount} messages and {trip.companionCount} companions
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default UpcomingTrips;