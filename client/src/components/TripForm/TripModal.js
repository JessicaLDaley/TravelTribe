import React, { useState }  from "react";
import TripForm from "./TripForm";
import { useMutation} from "@apollo/client";
import {QUERY_ME} from '../../utils/queries';
import { ADD_TRIP } from '../../utils/mutations';
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

function TripModal({friends}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const [addTrip] = useMutation(ADD_TRIP);

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await addTrip({
            variables: { ...formState },
            refetchQueries: () => [{query:QUERY_ME}]
            });
            setFormState(blankState);
            onClose();
        } catch (e) {
            console.error(e);
        }
    }

    const blankState = {
        tripName: '',
        tripDetails: '',
        tripDestination: '',
        tripCoordinates: [],
        tripDeparture: '',
        tripReturn: '',
        tripCompanions: []
    }

    const [formState, setFormState] = useState(blankState);

    const friendAdd = (event) => {
        const checkedFriends = document.querySelectorAll('[role="menuitemcheckbox"]');
        let friendsToAdd = [];
        checkedFriends.forEach(element => {
            if (element.ariaChecked === "true") {
            friendsToAdd.push(element.value);
            }
        });
        setFormState({
            ...formState,
            tripCompanions: friendsToAdd
        });
        console.log(formState);
    }

    const handleChange = (event) => {
        console.log(event);
        const{ name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value
        });
        console.log(formState);
    };

    return (
        <>
        <Button onClick={onOpen} mb={2}>Create a new Trip</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader textAlign="center">New Trip Form</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <TripForm friends={friends}
                        handleChange={handleChange}
                        friendAdd={friendAdd}
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