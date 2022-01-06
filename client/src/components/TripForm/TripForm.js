import React from "react";
import FriendsMenu from './FriendsMenu';
import DestinationMenu from "./DestinationMenu";
import {Flex, Input, FormControl, FormLabel} from '@chakra-ui/react';

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

            <FriendsMenu friendAdd={friendAdd} friends={friends}/>

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

export default TripForm;