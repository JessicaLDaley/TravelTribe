import React, { useState } from "react";
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

import { useMutation } from "@apollo/client";
import { ADD_TRIP } from '../utils/mutations';

// connect this form to the addTrip mutation
// when the button is pressed the graphql mutation is used

// tripCoordinates
// tripCompanion {
// _id
// username
// email
// }

function TripForm({handleChange}){
    return(
        <Flex direction="column">
            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripname'>Trip Name</FormLabel>
                <Input id='tripname' type='text' name='tripName' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripdesc'>Trip Description</FormLabel>
                <Input id='tripdesc' type='text' name='tripDetails' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripcomp'>Trip Companions</FormLabel>
                <Input id='tripcomp' type='text' name='tripCompanions' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripdest'>Trip Destination</FormLabel>
                <Input id='tripdest' type='text' name='tripDestination' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripstart'>Trip Start Date</FormLabel>
                <Input id='tripstart' type='date' name='tripDeparture' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true}>
                <FormLabel htmlFor='tripend'>Trip End Date</FormLabel>
                <Input id='tripend' type='date' name='tripReturn' onChange={handleChange}/>
            </FormControl>
        </Flex>
    );
}

function TripModal(){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [addTrip] = useMutation(ADD_TRIP);

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try {
        const { data } = await addTrip({
          variables: { ...formState }
        });
      } catch (e) {
        console.error(e);
      }
    }

    const [formState, setFormState] = useState({
      tripName: '',
      tripDetails: '',
      tripDestination: '',
      tripCoordinates: '',
      tripDeparture: '',
      tripReturn: '',
      tripCompanions: ''
    });

    const handleChange = (event) => {
      const{ name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value
      });
      console.log(formState);
    };

    return (
        <>
        <Button onClick={onOpen}>Create a new Trip</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>New Trip Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <TripForm
                      handleChange={handleChange}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button onClick={handleFormSubmit}>Create Trip</Button>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>Close</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

export default TripModal;