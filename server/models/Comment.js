const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormatLong');

const commentSchema = new Schema (
  {
    commentText: {
      type: String,
      required: 'You need to leave a comment!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeFormat => dateFormat(timeFormat)
    },
    username: {
      type: String,
      required: true
    }
  },
  {
    toJSON: {
      getters: true
    }
  }
)


module.exports = commentSchema