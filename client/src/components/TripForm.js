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
    useDisclosure
} from '@chakra-ui/react';
import { ADD_TRIP } from '../utils/mutations';
import { useMutation } from "@apollo/client";

function TripForm(){
    const [formState, setFormState] = useState({
      tripName: '',
      tripDetails: '',
      tripDestination: '',
      tripCoordinates: '',
      tripDeparture: '',
      tripReturn: ''
    });
    const [addTrip] = useMutation(ADD_TRIP);

    const handleChange = (event) => {
      const{ name, value } = event.target;

      setFormState({
        ...formState,
        [name]: value
      });
    };

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
                    were gonna put a form here to collect the proper data to create a new trip
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

export default TripForm;