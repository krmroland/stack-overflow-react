export default (faker, Factory) => ({
  title: faker.lorem.word(),
  description: faker.lorem.words(2),
  created_at: faker.date.recent().toLocaleDateString(),
  author: Factory.of('user').make(),
  id: faker.random.uuid(),
  updated_at: faker.date.recent().toLocaleDateString(),
});
