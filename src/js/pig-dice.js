export function rollDi() {
  let min = Math.ceil(1);
  let max = Math.floor(7);
  const roll = Math.floor(Math.random() * (max - min) + (min));
  return roll;
};