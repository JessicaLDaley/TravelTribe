import React from "react";
import ProfileMap from "../MapLogic";
import FriendsList from '../FriendsList';
import {Flex} from '@chakra-ui/react'
import {useParams} from "react-router-dom";
import {useQuery} from "@apollo/client";
import {QUERY_USER} from '../../utils/queries';

function Profile(){
    // pull the username from the params
    const username = useParams().username;
    document.title = `${username} | Profile`;

    // get the user data from the database
    const {loading, error, data} = useQuery(QUERY_USER, {
        variables: {username}
    });

    if(loading){
        return(
            <Flex display="column">
                ...loading
            </Flex>
        );
    }
    if(data){
        return(
            <Flex display="column">
                <ProfileMap trips={[]}/>
                <FriendsList user={data?.user} username={username}/>
            </Flex>
        );
    }
}

export default Profile;