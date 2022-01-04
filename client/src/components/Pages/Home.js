import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Box,
  Button,
  Flex,
  Image,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function Home({
  title,
  subtitle,
  image,
  ctaLink,
  ctaText,
  ...rest
}) {
  return (
    <Flex
      align="center"
      justify={{ base: "center", md: "space-around", xl: "space-between" }}
      direction={{ base: "column-reverse", md: "row" }}
      wrap="no-wrap"
      minH="70vh"
      px={8}
      mb={16}
      {...rest}
    >
      <Stack
        spacing={4}
        w={{ base: "80%", md: "40%" }}
        align={["center", "center", "flex-start", "flex-start"]}
      >
        <Heading
          as="h1"
          size="xl"
          fontWeight="bold"
          color="primary.800"
          textAlign={["center", "center", "left", "left"]}
        >
          {title}
        </Heading>
        <Heading
          as="h2"
          size="md"
          color="primary.800"
          opacity="0.8"
          fontWeight="normal"
          lineHeight={1.5}
          textAlign={["center", "center", "left", "left"]}
        >
          {subtitle}
        </Heading>
        <Link to={ctaLink}>
          <Button
            borderRadius="8px"
            size="md"
            rounded="md"
            color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.500", "primary.500"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
            }}
          >
            {ctaText}
          </Button>
        </Link>
        <Text
          fontSize="xs"
          mt={2}
          textAlign="center"
          color="primary.800"
          opacity="0.6"
        >
          No credit card required.
        </Text>
      </Stack>
      <Box w={{ base: "80%", sm: "60%", md: "50%" }} mb={{ base: 12, md: 0 }}>
        {/* TODO: Make this change every X secs */}
        <Image src={image} size="100%" rounded="1rem" shadow="2xl" />
      </Box>
    </Flex>
  );
}

Home.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string
};

Home.defaultProps = {
  title: "Travel Tribe",
  subtitle:"Organizing a travel group is sometimes challenging. Careful planning and open communication are the keys to success. Travel Tribe is an exclusive social media application that allows group members to meet, share ideas, and ultimately take the stress out of organizing. Post schedule updates, meeting locations and share photos to commemorate your travels. Wherever the journey takes you, Travel Tribe has your back. Bon voyage!",
  image: "https://source.unsplash.com/collection/959652/800x600",
  ctaText: "Create your account now",
  ctaLink: "/signup"
};