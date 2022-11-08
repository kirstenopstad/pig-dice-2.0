import { rollDi } from './../src/js/pig-dice.js';

describe('rollDi', () => {

  test('it should return a random number from 1-6', () => {
    expect(rollDi()).toEqual(/[123456]/);
  });
})
