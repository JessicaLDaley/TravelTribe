import React, { useState } from "react";
import Auth from "../utils/auth";
import { Button, Flex, Heading, Input, useColorMode, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from '@chakra-ui/react';
import "@fontsource/lexend-zetta"
import { useMutation } from "@apollo/client";
import { LOGIN } from '../utils/mutations';

function Login() {
    const loginStyle = useColorMode();
    document.title = 'Login';

    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN);

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
            const { data } = await login({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <Flex direction="column" background="primary.500" p={12} rounded={6}>
            <Heading mb={6} color="white" textAlign="center">Login</Heading>
            <Input placeholder="email@example.com" variant="filled" mb={3} type="email" name="email" onChange={handleChange} />
            <Input placeholder="password" variant="filled" mb={6} type="password" name="password" onChange={handleChange} />
            <Button color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.300", "primary.300"]}
                _hover={{
                    bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
                }}
                onClick={handleFormSubmit}>Log In</Button>
        </Flex>
    );
}

function LoginModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
            <Button onClick={onOpen} size="sm" rounded="md"
                color={["primary.500", "primary.500", "white", "white"]}
                bg={["white", "white", "primary.500", "primary.500"]}
                _hover={{
                    bg: ["primary.100", "primary.100", "primary.400", "primary.400"]
                }}>Login</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered>
                <ModalOverlay />
                <ModalContent background="primary.500" >
                    <ModalCloseButton color="white" />
                    <ModalBody>
                        <Login />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default LoginModal;