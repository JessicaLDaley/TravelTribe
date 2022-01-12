import React, { useState } from "react";
import { Flex, Text, Textarea, FormControl, Button } from '@chakra-ui/react';
import { useMutation } from "@apollo/client";
import {ADD_COMMENT} from '../../utils/mutations';

const CommentTextarea = ({ tripId }) => {
  const [commentText, setBody] = useState('');
  const [characterCount, setCharacterCount] = useState(0);

  const handleChange = (event) => {
    if (event.target.value.length <= 280) {
      setBody(event.target.value);
      setCharacterCount(event.target.value.length);
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      await addComment({
        variables: { commentText, tripId },
      });

      setBody("");
      setCharacterCount(0);
    } catch (e) {
      console.error(e);
    }
  };

  const [addComment] = useMutation(ADD_COMMENT);

  return (
    <Flex direction='column'>
      <FormControl onSubmit={handleFormSubmit}>
        <Text fontSize='sm'>Character Count: {characterCount}/280</Text>
        <Textarea
          placeholder="Enter your message here..."
          value={commentText}
          onChange={handleChange}
          size='md' />
        <Button type='submit' onClick={handleFormSubmit}>Send message</Button>
      </FormControl>
    </Flex>
  )
};

export default CommentTextarea;