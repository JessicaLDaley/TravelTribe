const { User, Trip } = require('../models')
const { AuthenticationError } = require('apollo-server-express')
const { signToken } = require('../utils/auth')

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('trips')
          .populate('companions');
    
        return userData;
      }    
      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
      .select('-__v -password')
      .populate('trips')
      .populate('companions')
    },
    user: async (parent, { username }) => {
      return User.findOne({ username })
      .select('-__v -password')
      .populate('trips')
      .populate('companions')
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {}
      return Trip.find(params).sort({ tripDeparture: -1 })
    },
    trip: async (parent, { _id }) => {
      return Trip.findOne({ _id });
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args)
      const token = signToken(user)

      return { token, user }
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email })

      if (!user) {
        throw new AuthenticationError('Incorrect credentials')
      }

      const correctPw = await user.isCorrectPassword(password)

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials')
      }

      const token = signToken(user)
      return { token, user }
    },
    addTrip: async (parent, args, context) => {
      if (context.user) {
        const trip = await Trip.create({ ...args, username: context.user.username });
    
        await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { trips: trip._id } },
          { new: true }
        );
    
        return trip;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addCompanion: async (parent, { userId, tripId }, context) => {
      if (context.user) {
        const updatedTrip = await Trip.findOneAndUpdate(
          { _id: tripId },
          { $addToSet: { tripCompanions: userId } },
          { new: true }
        ).populate('tripCompanions');
    
        return updatedTrip;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { tripId, commentText }, context) => {
      if (context.user) {
        const updatedTrip = await Trip.findOneAndUpdate(
          { _id: tripId },
          { $push: { tripComments: { commentText, username: context.user.username } } },
          { new: true, runValidators: true }
        );
    
        return updatedTrip;
      }
    
      throw new AuthenticationError('You need to be logged in!');
    },
    addPlaces: async (parent, { tripId, args }, context ) => {
      if(context.user) {
        const updatedTrip = await Trip.findOneAndUpdate(
          {_id: tripId},
          { $push: { placesToSee: { args }}},
          { new: true, runValidators: true }
        )

        return updatedTrip
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    addPicture: async ( parent, { tripId, tripName, pictureId }, context ) => {
      if(context.user) {
        const updatedTrip = await Trip.findOneAndUpdate(
          { _id: tripId },
          { $push: { pictureAlbum: { tripName, pictureId , username: context.user.username }}},
          { new: true, runValidators: true }
        )

        return updatedTrip
      }

      throw new AuthenticationError('You need to be logged in!')
    }
  },
}

module.exports = resolvers