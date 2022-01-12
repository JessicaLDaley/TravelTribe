const { Schema, model } = require('mongoose')
const placesSchema = require('./Places')
const albumSchema = require('./Album')
const dateFormat = require('../utils/dateFormat')
const commentSchema = require('./Comment')

const tripSchema = new Schema(
  {
    tripName: {
      type: String,
      required: 'Please provide a name for this Trip!'
    },
    tripDetails: {
      type: String,
      required: 'You need to provide the trip summary details!',
      minlength: 1,
      maxlength: 280
    },
    tripDestination: {
      type: String,
      required: 'Where are we going?',
    },
    tripCoordinates: { 
      type: Array
    },
    tripComments: [commentSchema],
    tripCompanions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
    tripDeparture: {
      type: Date,
      get: timestamp => dateFormat(timestamp)
    },
    tripReturn: {
      type: Date,
      get: timestamp => dateFormat(timestamp)
    },
    placesToSee: [placesSchema],
    pictureAlbum: [albumSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true
    }
  }
)

tripSchema.virtual('commentCount').get(function() {
  return this.tripComments.length;
})

tripSchema.virtual('companionCount').get(function() {
  return this.tripCompanions.length;
})

tripSchema.virtual('placesCount').get(function() {
  return this.placesToSee.length;
})

tripSchema.virtual('pictureCount').get(function() {
  return this.pictureAlbum.length;
})

const Trip = model('Trip', tripSchema)

module.exports = Trip
