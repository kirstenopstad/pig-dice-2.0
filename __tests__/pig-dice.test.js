import { rollDi, rollResult, Player, LeaderBoard } from './../src/js/pig-dice.js';

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

  test('It will return true if scoreTotal + turnTotal = 100+', () => {
    newPlayer.scoreTotal = 80;
    newPlayer.turnTotal = 20;
    expect(newPlayer.checkWinner()).toEqual(true);
  });

  test('It will return false if scoreTotal + turnTotal < 100+', () => {
    newPlayer.scoreTotal = 79;
    newPlayer.turnTotal = 20;
    expect(newPlayer.checkWinner()).toEqual(true);
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

describe('Player.prototype.hold', () => {

  test('It will add turnTotal to value of scoreTotal', () => {
    const newPlayer = new Player (0,0,0);
    newPlayer.scoreTotal = 2;
    newPlayer.turnTotal = 8;
    newPlayer.hold();
    expect(newPlayer.scoreTotal).toEqual(10);
  })
})

describe('LeaderBoard', () => {
  let leaderBoard;
  let newPlayer;

  beforeEach(() => {
    leaderBoard = new LeaderBoard();
    newPlayer = new Player(0,0,0);
  });

  test('It will create a LeaderBoard object that contains players and turnId', () => {
    expect(leaderBoard.players).toEqual({});
    expect(leaderBoard.turnId).toEqual(1);
  });

  test('It will add a Player to players', () => {
    leaderBoard.addPlayer(newPlayer);
    expect(leaderBoard.players["0"]).toEqual({ scoreTotal: 0, turnTotal: 0,  id: 0 });
  });

  test('It will change the turnId from 1 to 2', () => {
    const newPlayer1 = new Player (0,3,1);
    const newPlayer2 = new Player (0,6,2);
    leaderBoard.addPlayer(newPlayer1);
    leaderBoard.addPlayer(newPlayer2);
    leaderBoard.turnId = 1;
    leaderBoard.switchPlayer();
    expect(leaderBoard.turnId).toEqual(2);
  })

  test('It will change the turnId from 2 to 1', () => {
    const newPlayer1 = new Player (0,3,1);
    const newPlayer2 = new Player (0,6,2);
    leaderBoard.addPlayer(newPlayer1);
    leaderBoard.addPlayer(newPlayer2);
    leaderBoard.turnId = 2;
    leaderBoard.switchPlayer();
    expect(leaderBoard.turnId).toEqual(1);
  })

  test('It will reset turnTotal to zero', () => {
    const newPlayer1 = new Player (0,3,1);
    const newPlayer2 = new Player (0,6,2);
    leaderBoard.addPlayer(newPlayer1);
    leaderBoard.addPlayer(newPlayer2);
    leaderBoard.switchPlayer();
    expect(leaderBoard.players["1"].turnTotal).toEqual(0);
    expect(leaderBoard.players["2"].turnTotal).toEqual(0);
  })
});

