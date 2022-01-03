import {
  Box,
  Heading,
  Container,
  Text,
  Stack,
} from '@chakra-ui/react';


export default function CallToActionWithAnnotation() {
  return (
    <>
      <Container maxW={'3xl'} minH="90vh" display="flex" alignItems="center" justifyContent="center">
        <Stack as={Box} textAlign={'center'} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }} lineHeight={'110%'}>
          <Text as={'span'} color={'06093d'} bgGradient="linear(to-r, #30CFD0 0%, #06093d 100%)" bgClip="text">
              TripTribe
            </Text>
           
          </Heading>
          
          <Stack direction={'column'} spacing={3} align={'center'} alignSelf={'center'} position={'relative'}>
         
     
          </Stack>
        </Stack>
      </Container>

    </>
  );
}

