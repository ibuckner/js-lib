/**
 * returns an integer contrained to the min and max values given
 * @param {number} min - minimum integer (inclusive)
 * @param {number} max - maximum integer (inclusive)
 */
export function randomInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random time value as hhmm (represented as an integer)
 * @param {number} min - minimum time value (inclusive)
 * @param {number} max - maximum time value (inclusive)
 * @param {number} round - rounds the minutes to the nearest value specified e.g. half-hour
 */
export function randomTimeInt(min: number, max: number, round: number): number {
  let t: number = Math.floor(Math.random() * (max - min + 1) + min);
  let hh: number = Math.floor(t / 100), mm: number = t % 100;
  if (mm > 59) {
    mm = 100 - mm;
    ++hh;
  }
  mm = roundNearest(mm, round);
  if (mm > 59) {
    mm = 0;
  }
  
  if (hh > 23) {
    hh = 0;
  }
  t = hh * 100 + mm
  return t > max ? max : t;
}

function roundNearest(value: number, round: number): number {
  round = Math.abs(Math.trunc(round));
  if (round === 0) {
    round = 1;
  }
  return Math.round(value / round) * round;
}