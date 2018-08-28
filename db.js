const faker = require("faker");
const length = 100;

faker.locale = "de";

module.exports = () => {
  const articles = Array.from(Array(length)).map(item => {
    return {
      id: faker.random.uuid(),
      title: faker.lorem.sentence(),
      user: {
        image: faker.image.avatar(),
        name: faker.name.findName()
      },
      date: faker.date.past(),
      content: faker.lorem.paragraphs()
    };
  });

  return {
    articles
  };
};
