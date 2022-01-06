import React from "react";
import {
    FormControl,
    Menu,
    MenuOptionGroup,
    MenuList,
    MenuItemOption,
    MenuButton,
    FormLabel,
    Button
} from '@chakra-ui/react';

function FriendsMenu({friendAdd, friends}){
    return(
        <FormControl>
            <FormLabel htmlFor='tripcomp'>Trip Companions</FormLabel>
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
        </FormControl>
    );
}

export default FriendsMenu;