import React from "react";
import Auth from "../../utils/auth";
import {Button, Flex, Heading, Input, useColorMode} from '@chakra-ui/react';
import "@fontsource/lexend-zetta"

function Login() {
  const loginStyle = useColorMode();
  document.title = 'Login';
  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" textAlign="center">
      <Flex direction="column" border="outset" background="primary.500" p={12} rounded={6}>
        <Heading mb={6}color="white">Login</Heading>
        <Input placeholder="email@example.com" variant="filled" mb={3} type="email"/>
        <Input placeholder="password" variant="filled" mb={6} type="password"/>
        <Button color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.300", "primary.300"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
            }}>Log In</Button>
      </Flex>
    </Flex>
  );
}

export default Login;