import React from 'react'
import {Flex} from '@chakra-ui/react'
import { Link } from 'react-router-dom'


const CommentArea = ({comments}) => {  
  return (
    <Flex direction="column">
      {comments.map(comment => (
          <p className='comments' key={comment._id}>
            <b>{comment.commentText}</b>
            By <Link to={`./user/${comment.username}`}>{comment.username}</Link> on {comment.createdAt}
          </p>
        ))}      
    </Flex>
  )
}

export default CommentArea;