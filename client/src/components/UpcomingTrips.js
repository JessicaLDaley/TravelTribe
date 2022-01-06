import React from "react";
import { Link } from "react-router-dom";
import { Flex, Table, Thead, Tbody, Tr, Th, Td, Box, Badge } from "@chakra-ui/react";

function UpcomingTrips({ trips }) {
    return (
        <Box maxW='lg' borderWidth='2px' borderRadius='lg' overflow='hidden'>
      
      {trips.map((trip) => (
        <Box p='6'>
          <Box display='flex' alignItems='center'>
            <Badge borderRadius='full' px='12' fontSize='md'size="md"
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
              <br/>
              Returning on {trip.tripReturn}

            
          </Box>
          <Box as='span' ml='2' color='gray.600' fontSize='sm'>
              {trip.commentCount} messages and {trip.companionCount} companions
            </Box>
        </Box>
      ))}
      </Box>
    )


//   return (
//       <Flex>
//     <Table size="md" justifyContent="center" variant="striped">
//       <Thead>
//         <Tr>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Name
//           </Th>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Details
//           </Th>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Destination
//           </Th>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Departure
//           </Th>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Return
//           </Th>
//           <Th border="outset" fontSize="sm" color="primary.500">
//             Trip Companions
//           </Th>
//         </Tr>
//       </Thead>
//       <Tbody>
//       {trips.map((trip) => (
//             <Tr key={trip._id}>
//               <Td border="outset">
//                 {" "}
//                 <Link to={`./trip/${trip._id}`}>{trip.tripName}</Link>
//               </Td>
//               <Td border="outset">{trip.tripDetails}</Td>
//               <Td border="outset">{trip.tripDestination}</Td>
//               <Td border="outset">{trip.tripDeparture}</Td>
//               <Td border="outset">{trip.tripReturn}</Td>
//               {/* <Td border="outset">{trip.tripCompanions}</Td> */}
//             </Tr>
//       ))}
//       </Tbody>
//     </Table>
//     </Flex>
//   );
}

export default UpcomingTrips;
