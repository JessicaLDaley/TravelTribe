import React from "react";
import { SimpleGrid, Box, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const CommentArea = ({ comments }) => {
  return (
    <SimpleGrid columns="1" spacing="10">
      {comments.map((comment) => (
        <Flex className="comments" key={comment._id} direction='column'>
          <Box>
            <b>{comment.commentText}</b>
          </Box>
          <Box>
            By <Link to={`/user/${comment.username}`}>{comment.username}</Link>{" "}
            on {comment.createdAt}
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  );
};
export default CommentArea;
