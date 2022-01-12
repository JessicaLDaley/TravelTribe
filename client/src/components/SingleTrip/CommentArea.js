import React from "react";
import { SimpleGrid, Box, Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CommentArea = ({ comments }) => {
  return (
    <SimpleGrid columns="1" spacing="4" overflowY="scroll">
      {comments.map((comment) => (
        <Flex className="comments" key={comment._id} direction='column' backgroundColor="gray.100" borderRadius="lg" color="black">
          <Box p={3}>
            <Text fontWeight="bold">{comment.commentText}</Text>
            <Text fontWeight="hairline">From <Link to={`/user/${comment.username}`}>{comment.username}</Link> on {comment.createdAt}</Text>
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
};
export default CommentArea;
