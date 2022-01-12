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
        <Text fontSize='sm' fontWeight="light">Character Count: {characterCount}/280</Text>
        <Textarea
          placeholder="Enter your message here..."
          value={commentText}
          onChange={handleChange} 
          mb="3"
          />
        <Button type='submit' onClick={handleFormSubmit} width="100%">Send message</Button>
      </FormControl>
    </Flex>
  )
};

export default CommentTextarea;