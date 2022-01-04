import React, { useState } from "react";
import Auth from "../../utils/auth";
import {Button, Flex, Heading, Input} from '@chakra-ui/react';
import { ADD_USER } from '../../utils/mutations';
import { useMutation } from "@apollo/client";

function Signup() {
  document.title = 'Signup';

  const [formState, setFormState] = useState({ userName: '', email: '', password: '' });
  const [addUser, { error }] = useMutation(ADD_USER);



  return (
    <Flex height="100vh" alignItems="center" justifyContent="center" textAlign="center">
      <Flex direction="column" border="outset" background="primary.500" p={12} rounded={6}>
        <Heading mb={6} color="white">Signup</Heading>
        <Input placeholder="Username" variant="filled" color="primary.400"mb={3} type="text"/>
        <Input placeholder="email@example.com" variant="filled" color="primary.400"mb={3} type="email"/>
        <Input placeholder="password" variant="filled" color="primary.400" mb={6} type="password"/>
        <Button color={["primary.500", "primary.500", "white", "white"]}
            bg={["white", "white", "primary.300", "primary.300"]}
            _hover={{
              bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
            }}>Signup</Button>
      </Flex>
    </Flex>
  );
}

export default Signup;

