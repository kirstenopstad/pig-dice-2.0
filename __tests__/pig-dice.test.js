import { rollDi, rollResult, Player } from './../src/js/pig-dice.js';

describe('rollDi', () => {

  test('it should return a random number from 1-6', () => {
    expect(/[123456]/.test(rollDi())).toBeTruthy();
    // expect(rollDi()).toBeGreaterThan(0);
    // expect(rollDi()).toBeLessThan(7);
  });
})

describe('rollResult', () => {

  test('it should return 0 if a one is rolled', () => {
    expect(rollResult(1)).toEqual(0);
  });

  test('it will return the value of any number rolled between 2-6', () => {
    expect(rollResult(2)).toEqual(2);
    expect(rollResult(3)).toEqual(3);
    expect(rollResult(4)).toEqual(4);
    expect(rollResult(5)).toEqual(5);
    expect(rollResult(6)).toEqual(6);
  });
})

describe('Player', () => {
  let newPlayer;
    
  beforeEach(() => {
    newPlayer = new Player(0,0,0);
  });

  test('It will create an object with the keys, score, total, & turn total', () => {
    expect(newPlayer.scoreTotal).toEqual(0);
    expect(newPlayer.turnTotal).toEqual(0);
  });

  test('It will create an object with the keys, score, total, & turn total and an id', () => {
    expect(newPlayer.scoreTotal).toEqual(0);
    expect(newPlayer.turnTotal).toEqual(0);
    expect(newPlayer.id).toEqual(0);
  });
});

describe('Player.prototype.tally', () => {

  test('It will add roll result to turn total', () => {
    const newPlayer = new Player (0,0,0);
    const rollValue = 4;
    newPlayer.tally(rollValue);
    expect(newPlayer.turnTotal).toEqual(4);
  });

  test('It will zero out turnTotal if roll value is a 0', () => {
    const newPlayer = new Player (0,6,0);
    const rollValue = 0;
    newPlayer.tally(rollValue);
    expect(newPlayer.turnTotal).toEqual(0);
  });
});
