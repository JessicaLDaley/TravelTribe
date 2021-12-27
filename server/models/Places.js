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

const Place = model('Place', placesSchema)

module.exports = Place