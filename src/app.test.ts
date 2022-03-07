import app from './app';

test('console output of app', () => {
	expect(app()).toBe('hello package!');
});
