import React from "react";
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
} from '@chakra-ui/react'

import {
    Input,
    FormControl,
    FormLabel,
} from '@chakra-ui/react'

// connect this form to the addTrip mutation
// when the button is pressed the graphql mutation is used

// tripCoordinates
// tripCompanion {
// _id
// username
// email
// }

function TripForm(){
    return(
        <Flex direction="column">
            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripname'>Trip Name</FormLabel>
                <Input id='tripname' type='text'/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripdesc'>Trip Description</FormLabel>
                <Input id='tripdesc' type='text'/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripcomp'>Trip Companions</FormLabel>
                <Input id='tripcomp' type='text'/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripdest'>Trip Destination</FormLabel>
                <Input id='tripdest' type='text'/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripstart'>Trip Start Date</FormLabel>
                <Input id='tripstart' type='date'/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripend'>Trip End Date</FormLabel>
                <Input id='tripend' type='date'/>
            </FormControl>
        </Flex>
    );
}

function TripModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <>
        <Button onClick={onOpen}>Create a new Trip</Button>

        <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Trip Form</ModalHeader>
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