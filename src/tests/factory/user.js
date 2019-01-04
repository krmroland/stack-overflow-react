export default faker => ({
  username: faker.internet.userName(),
  token: faker.random.uuid(),
});
