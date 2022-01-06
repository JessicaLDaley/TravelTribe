const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormatLong')

const albumSchema = new Schema (
  {
    pictureId: {
      type: String,
      required: true
    },
    tripName: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timeFormat => dateFormat(timeFormat)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
)

module.exports = albumSchema