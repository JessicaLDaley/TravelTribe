import React from 'react';
import Image from './images/Travel.jpg';
import { chakra,Box, useColorModeValue, Flex,} from '@chakra-ui/react';


const Header = () => {
    const bg = useColorModeValue('white', 'gray.800');

  
    return (
      <>
        <chakra.header bg={bg} w="full" px={5} py={1} shadow="md" mx="auto">
          <Flex align="center" justify="space-between" mx="auto" maxW="1420px">
            <Flex>
              <Box>
             <Image> src='./images/Travel.jpg'</Image>
             </Box>
            </Flex>
            <Flex align="center">
              
          </Flex>
          </Flex>
        </chakra.header>
  
       
      </>
    );
  };
  
  export default Header;