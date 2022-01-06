const faker = require('faker');

const db = require('../config/connection');
const { Trip, User } = require('../models');

db.once('open', async () => {
  await Thought.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 15; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  // for (let i = 0; i < 100; i += 1) {
  //   const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //   const { _id: userId } = createdUsers.ops[randomUserIndex];

  //   let friendId = userId;

  //   while (friendId === userId) {
  //     const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
  //     friendId = createdUsers.ops[randomUserIndex];
  //   }

  //   await Trip.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  // }

  // create thoughts
  let createdTrips = [];
  for (let i = 0; i < 25; i += 1) {
    const tripName = faker.lorem.word();
    const tripDetails = faker.lorem.words(Math.round(Math.random() * 10) + 1)
    const tripDestination = faker.address.cityName();
    const tripDeparture = faker.date.soon();
    const tripReturn = faker.date.future();
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdTrip = await Trip.create({ tripName, tripDetails, tripDestination, tripDeparture, tripReturn, tripCompanion: username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { trips: createdTrip._id } }
    );

    createdTrips.push(createdTrip);
  }

  // create reactions
  for (let i = 0; i < 100; i += 1) {
    const reactionBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomThoughtIndex = Math.floor(Math.random() * createdThoughts.length);
    const { _id: thoughtId } = createdThoughts[randomThoughtIndex];

    await Thought.updateOne(
      { _id: thoughtId },
      { $push: { reactions: { reactionBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});
