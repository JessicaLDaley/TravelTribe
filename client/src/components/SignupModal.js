import React, { useState } from "react";
import Auth from "../utils/auth";
import { Button, Flex, Heading, Input, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody  } from '@chakra-ui/react';
import { ADD_USER } from '../utils/mutations';
import { useMutation } from "@apollo/client";

const Signup = () => {
    document.title = 'Signup';

    const [formState, setFormState] = useState({ username: '', email: '', password: '' });
    const [addUser, { error }] = useMutation(ADD_USER);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormState({
            ...formState,
            [name]: value
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await addUser({
                variables: { ...formState }
            });
            console.log(error);
            Auth.login(data.addUser.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Flex direction="column" p={12} rounded={6}>
            <Heading mb={6} color="white" textAlign="center">Signup</Heading>
            <Input placeholder="username" variant="filled" color="primary.400" mb={3} type="text" name="username" onChange={handleChange} />
            <Input placeholder="email@example.com" variant="filled" color="primary.400" mb={3} type="email" name="email" onChange={handleChange} />
            <Input placeholder="password" variant="filled" color="primary.400" mb={6} type="password" name="password" onChange={handleChange} />
            <Button color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.300", "primary.300"]}
                _hover={{
                    bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
                }}
                onClick={handleFormSubmit}>Signup
            </Button>
        </Flex>
    );
}

function SignupModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} size="sm"
                rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.500", "primary.500"]}
                _hover={{
                    bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
                }}>Create Account
            </Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent background="primary.500">
                    <ModalCloseButton color="white" />
                    <ModalBody>
                        <Signup />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default SignupModal;