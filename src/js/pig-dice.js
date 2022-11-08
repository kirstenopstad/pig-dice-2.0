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

export function Player(scoreTotal, turnTotal) {
  this.scoreTotal = scoreTotal;
  this.turnTotal = turnTotal;
}