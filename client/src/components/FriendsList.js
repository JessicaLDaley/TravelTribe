import React from "react";
import {Flex, Table, Thead, Tbody, Tfoot, Th, Tr, Td, Button} from '@chakra-ui/react'
import {Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton} from '@chakra-ui/react'
import {useDisclosure, Text} from '@chakra-ui/react';
import {Link} from 'react-router-dom';

function FriendsModal({friends}) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <>
        <Button onClick={onOpen}>View Entire Tribe</Button>

        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Tribe Members</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {friends.map(friend => (
                        <Link to={`./user/${friend.username}`} key={friend._id}><p>{friend.username}</p></Link>
                    ))}
                </ModalBody>
    
                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    )
}

// obviously not the final styling for this component please be kind, im merely throwing things together in an attempt to bring this application to life

function FriendsList({user}){
    const {friends, username, companionCount} = user;
    // let shortFriendsList = [];
    // if(friends.length <= 5){
    //     shortFriendsList = friends.slice(0, friends.length);
    // }else{
    //     shortFriendsList = friends.slice(0, 5);
    // }

    return(
        <Flex>
            <Table>
                <Thead>
                    <Tr>
                        <Th>{username}'s Tribe ({companionCount})</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {/* loop thru the friends list and display 5 of them on the page */}
                    {/* ideally we will be able to click these friends and it will bring us to their profile */}
                    {/* the footer of the table will be a button that will open a modal that scrolls to view all friends */}
                    {friends.length > 0 ? friends.map(friend => (
                        <Tr key={friend._id}>
                            <Td><Link to={`./user/${friend.username}`}>{friend.username}</Link></Td>
                        </Tr>
                    )) : <Text>😔 sad 😔</Text>}
                </Tbody>
                {/* only display the button to access the friends modal if the user has more than 5 friends */}
                {companionCount > 5 ? (
                    <Tfoot>
                        <Tr>
                            <Th>
                                <FriendsModal friends={friends}/>
                            </Th>
                        </Tr>
                    </Tfoot>
                ) :  <></>}
            </Table>
        </Flex>
    );
}

export default FriendsList;