const { User, Trip } = require('../models')
const { AuthenticationError } = require('apollo-server-express')

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
  Mutation: {},
}

module.exports = resolvers