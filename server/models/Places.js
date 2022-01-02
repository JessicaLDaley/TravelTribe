const { Schema, model } = require('mongoose')

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

const Places = model('Place', placesSchema)

module.exports = Places