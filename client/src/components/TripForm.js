import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TRIP } from '../utils/mutations';
import {getCountries, getStates, getCities} from '../utils/worldData';
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
    MenuButton,
    Select
} from '@chakra-ui/react';

import {QUERY_ME} from '../utils/queries';

function FriendsMenu({friendAdd, friends}){
    return(
        <Menu closeOnSelect={false}>
            <MenuButton as={Button} colorScheme='blue' minWidth="100%">
                Select your companions
            </MenuButton>
            <MenuList>
                <MenuOptionGroup title='Companions' type='checkbox'>
                    {/* map over your friends here and create a menuItemOption for each one */}
                    {friends.map((friend, index) => (
                        <MenuItemOption value={friend._id} key={index} onBlur={friendAdd}>{friend.username}</MenuItemOption>
                    ))}
                </MenuOptionGroup>
            </MenuList>
        </Menu>
    );
}

function DestinationMenu(){
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState();
    const [selectedState, setSelectedState] = useState();
    const [selectedCity, setSelectedCity] = useState();

    useEffect(() => {
        const loadCountries = async () => {
            setCountries(await getCountries());
        }
        loadCountries();
    });

    useEffect(() => {
        const loadStates = async () => {
            setStates(await getStates(selectedCountry));
        }
        loadStates();
    }, [selectedCountry]);

    useEffect(() => {
        const loadCities = async () => {
            setCities(await getCities(selectedState));
        }
        loadCities();
    }, [selectedState]);

    return(
        <FormControl pb={1} isRequired>
            <FormLabel htmlFor='country'>Trip Destination</FormLabel>
            <Select id='country' placeholder='Select country' pb={1} onChange={(e) => setSelectedCountry(e.target.value)}>
                {countries.map((country, index) => (
                    <option key={index} value={country}>{country}</option>
                ))}
            </Select>

            <Select id='state' placeholder='Select state' pb={1} onChange={(e) => setSelectedState(e.target.value)}>
                {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                ))}
            </Select>

            <Select id='city' placeholder='Select city' pb={1} onChange={(e) => setSelectedCity(e.target.value)}>
                {cities.map((city, index) => (
                    <option key={index} value={city}>{city}</option>
                ))}
            </Select>
        </FormControl>
    );
}


// connect this form to the addTrip mutation
// when the button is pressed the graphql mutation is used
function TripForm({handleChange, friends, friendAdd}){
    return(
        <Flex direction="column">
            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripname'>Trip Name</FormLabel>
                <Input id='tripname' type='text' name='tripName' onChange={handleChange}/>
            </FormControl>

            <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripdesc'>Trip Description</FormLabel>
                <Input id='tripdesc' type='text' name='tripDetails' onChange={handleChange}/>
            </FormControl>

            <FormControl pb={1}>
                <FormLabel htmlFor='tripcomp'>Trip Companions</FormLabel>
                <FriendsMenu friendAdd={friendAdd}
                friends={friends}/>
            </FormControl>

            {/* <FormControl isRequired={true} pb={1}>
                <FormLabel htmlFor='tripdest'>Trip Destination</FormLabel>
                <Input id='tripdest' type='text' name='tripDestination' onChange={handleChange}/>
                <DestinationMenu/>
            </FormControl> */}

            <DestinationMenu/>

            <Flex pb={1}>
                <FormControl isRequired={true}>
                    <FormLabel htmlFor='tripstart'>Trip Start Date</FormLabel>
                    <Input id='tripstart' type='date' name="tripDeparture" onChange={handleChange}/>
                </FormControl>

                <FormControl isRequired={true}>
                    <FormLabel htmlFor='tripend'>Trip End Date</FormLabel>
                    <Input id='tripend' type='date' name="tripReturn" onChange={handleChange}/>
                </FormControl>
            </Flex>
        </Flex>
    );
}

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
        tripCoordinates: '',
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