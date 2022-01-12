// Sample card from Airbnb

import React from "react"
import { Box, Image, Badge } from '@chakra-ui/react';

function PostFeed() {

  const tripArray = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1522878129833-838a904a0e9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Rear view of modern home with pool',
      username: 'SteveB29',
      location: 'Moab, UT',
      title: 'Hiking and biking trip to Moab!',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 34
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1512100356356-de1b84283e18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Rear view of modern home with pool',
      username: 'SomeUser',
      location: 'Bahamas',
      title: 'Relaxing trip to an isolated getaway',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 0
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1591164115502-09f4edf9f005?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Rear view of modern home with pool',
      username: 'AnotherUser',
      location: 'Cliffs, Ireland',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 12
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Rear view of modern home with pool',
      username: 'PhotographerUser',
      location: 'World Trip',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 6
    },{
      imageUrl: 'https://media.istockphoto.com/photos/mature-couple-hike-above-lake-lugano-in-the-morning-picture-id1292251389?b=1&k=20&m=1292251389&s=170667a&w=0&h=oqgL9rLyvKe6ifecSng8QXWlzXOiNTTrewU92ecnmEc=',
      imageAlt: 'Rear view of modern home with pool',
      username: 'TravelCouple',
      location: 'Fjords, Norway',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 43
    },{
      imageUrl: 'https://media.istockphoto.com/photos/val-dorcia-hillside-sunset-in-tuscany-italy-picture-id180819399?b=1&k=20&m=180819399&s=170667a&w=0&h=JdxjnAMVpCiKkF8dFqe0wCPjv8AHJuihTKzVCbidjG4=',
      imageAlt: 'Rear view of modern home with pool',
      username: 'ItalyLover',
      location: 'Val-Dorcia, Italy',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 12
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1493328967571-819121ed5085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
      imageAlt: 'Rear view of modern home with pool',
      username: 'ScientistUser',
      location: 'Antartica',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 19
    },
    {
      imageUrl: 'https://bit.ly/2Z4KKcF',
      imageAlt: 'Rear view of modern home with pool',
      username: 'LastUser',
      location: 'Los Angeles, CA',
      title: 'Modern home in city center in the heart of historic Los Angeles',
      formattedPrice: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?',
      commentCount: 3
    }
  ]

  return (
    tripArray.map(property => (
      <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' my="4px">
      <Image src={property.imageUrl} alt={property.imageAlt}/>

      <Box p='6'>
        <Box display='flex' alignItems='baseline'>
          {/* have the colorScheme format based on time to trip, should add helpers.js file and function in there  */}
          <Badge borderRadius='full' px='2' colorScheme='teal'>
            Upcoming
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            fontSize='xs'
            textTransform='uppercase'
            ml='2'
          >
            {property.username} &bull; {property.location}
          </Box>
        </Box>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          as='u'
          // isTruncated
        >
          {property.title}
        </Box>

        <Box>
          {property.formattedPrice}
        </Box>

        <Box mt='2' color='gray.600' fontSize='sm'>
          {property.commentCount} Comments
        </Box>

      </Box>
    </Box>
    ))
    
  )
}

export default PostFeed;