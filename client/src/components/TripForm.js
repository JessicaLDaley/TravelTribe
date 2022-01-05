import React, { Profiler } from "react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Flex
} from '@chakra-ui/react';

import {
    Input,
    FormControl,
    FormLabel,
    Menu,
    MenuOptionGroup,
    MenuList,
    MenuItemOption,
    MenuButton
} from '@chakra-ui/react';

// fake friends data until we connect to graphql and pull the users friends
const friends = ['mike', 'jim', 'jack', 'john', 'joe', 'larry', 'paul', 'peter'];

function FriendsMenu(){
    return(
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme='blue' minWidth="100%">
                Select your companions
            </MenuButton>
            <MenuList>
                <MenuOptionGroup title='Companions' type='checkbox'>
                    {/* map over your friends here and create a menuItemOption for each one */}
                    {friends.map(friend => (
                        <MenuItemOption value={friend}>{friend}</MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}

// connect this form to the addTrip mutation
// when the button is pressed the graphql mutation is used
function TripForm(){
    return(
        <Flex direction="column">
            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripname'>Trip Name</FormLabel>
                <Input id='tripname' type='text'/>
            </FormControl>

            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripdesc'>Trip Description</FormLabel>
                <Input id='tripdesc' type='text'/>
            </FormControl>

            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripcomp'>Trip Companions</FormLabel>
                <FriendsMenu/>
            </FormControl>

            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripdest'>Trip Destination</FormLabel>
                <Input id='tripdest' type='text'/>
            </FormControl>

            <Flex pb={1}>
                <FormControl isRequired={true}>
                    <FormLabel htmlFor='tripstart'>Trip Start Date</FormLabel>
                    <Input id='tripstart' type='date'/>
                </FormControl>

                <FormControl isRequired={true}>
                    <FormLabel htmlFor='tripend'>Trip End Date</FormLabel>
                    <Input id='tripend' type='date'/>
                </FormControl>
            </Flex>
        </Flex>
    );
}

function TripModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button onClick={onOpen}>Create a new Trip</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">New Trip Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <TripForm/>
                </ModalBody>
                <ModalFooter>
                    <Button>Create Trip</Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default TripModal;