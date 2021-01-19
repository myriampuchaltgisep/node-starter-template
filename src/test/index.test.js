const { greeting } = require('../index');

test(`expect the project to greet me`, () => {
  expect(greeting).toBe('Hello there!');
});
