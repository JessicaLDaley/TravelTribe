const { Schema } = require('mongoose')

const placesSchema = new Schema (
  {
    placeName: {
      type: String,
      required: true,
      maxlength: 32
    },
    placeType: {
      type: String,
      required: true
    },
    placeKML: {
      type: String
    }
  }
)

module.exports = placesSchema