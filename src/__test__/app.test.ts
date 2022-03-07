import main from '../main';

test('console output of app', () => {
  expect(main()).toBe('hello package!');
});
