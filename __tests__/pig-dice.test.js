import { rollDi, rollResult } from './../src/js/pig-dice.js';

describe('rollDi', () => {

  test('it should return a random number from 1-6', () => {
    expect(/[123456]/.test(rollDi())).toBeTruthy();
  });
})

describe('rollResult', () => {

test('it should return 0 if a one is rolled', () => {
  expect(rollResult(1)).toEqual(0);
})

})
