import React from "react";
import ProfileMap from "../components/MapLogic";
import FriendsList from "../components/FriendsList";
import { Flex, Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { ADD_FRIEND } from "../utils/mutations";

function Profile() {
  // pull the username from the params
  const username = useParams().username;
  document.title = `${username} | Profile`;

  // get the user data from the database
  const { loading, error, data } = useQuery(QUERY_USER, {
    variables: { username },
  });
  
  const user = data?.user

  const [addFriend] = useMutation(ADD_FRIEND);

  const handleClick = async () => {
    try {
      await addFriend({
        variables: { id: user._id }
      });
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <Flex display="column">...loading</Flex>;
  }
  if (data) {
    return (
      <Flex display="column">
        Welcome to {username}'s Profile

        <ProfileMap trips={user?.trips}/>
        <FriendsList user={user} username={username}/>
        <Button
          onClick={handleClick}
          borderRadius="8px"
          size="md"
          rounded="md"
          color={["primary.500", "primary.500", "white", "white"]}
          bg={["white", "white", "primary.500", "primary.500"]}
          _hover={{
            bg: ["primary.100", "primary.100", "primary.400", "primary.400"],
          }}
        >
          {`Add ${username} to your friends' list`}
        </Button>
      </Flex>
    );
  }
}

export default Profile;
