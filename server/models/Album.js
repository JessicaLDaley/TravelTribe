const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

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
      get: timestamp => dateFormat(timestamp)
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
)

const Album = model('Album', albumSchema)

module.exports = Album