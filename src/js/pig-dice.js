export function rollDi() {
  let min = Math.ceil(1);
  let max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max - min) + (min));
  return roll;
};

export function rollResult(roll) {
  let rollValue;
  if (roll === 1){
    rollValue = 0;
  } else {
    rollValue = roll;
  }
  return rollValue;
}

export function Player(scoreTotal, turnTotal, id) {
  this.scoreTotal = scoreTotal;
  this.turnTotal = turnTotal;
  this.id = id;
}

Player.prototype.tally = function (rollValue) {
  if (rollValue !== 0) {
    this.turnTotal += rollValue;
  } else {
    this.turnTotal = 0;
  }
}

Player.prototype.hold = function () {
  this.scoreTotal += this.turnTotal;
  this.turnTotal = 0;
}

export function LeaderBoard() {
  this.players = {};
  this.turnId = 1;
} 

LeaderBoard.prototype.addPlayer = function (player) {
  this.players[player.id] = player;
}

LeaderBoard.prototype.switchPlayer = function () {
  if (this.turnId === 1) {
    this.turnId = 2 
  } else {
    this.turnId = 1
  }
  this.players[1].turnTotal = 0
  this.players[2].turnTotal = 0
}