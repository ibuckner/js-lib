/**
 * de Casteljau's algorithm for drawing and splitting bezier curves.
 * Inspired by https://pomax.github.io/bezierinfo/
 * @param {Number[][]} points Array of [x,y] points: [start, control1, control2, ..., end]
 * @param {Number} t Where to split the curve (value between [0, 1])
 */
function decasteljau(points: Number[][], t: number): any {
  const left: any[] = [];
  const right: any[] = [];

  function decasteljauRecurse(points: any, t: any): any {
    if (points.length === 1) {
      left.push(points[0]);
      right.push(points[0]);
    } else {
      const newPoints: any[] = Array(points.length - 1);

      for (let i: number = 0; i < newPoints.length; i++) {
        if (i === 0) {
          left.push(points[0]);
        }
        if (i === newPoints.length - 1) {
          right.push(points[i + 1]);
        }

        newPoints[i] = [
          ((1 - t) * points[i][0]) + (t * points[i + 1][0]),
          ((1 - t) * points[i][1]) + (t * points[i + 1][1]),
        ];
      }

      decasteljauRecurse(newPoints, t);
    }
  }

  if (points.length) {
    decasteljauRecurse(points, t);
  }

  return { left, right: right.reverse() };
}

/**
 * Convert segments represented as points back into a command object
 * @param {Number[][]} points Array of [x,y] points: [start, control1, control2, ..., end]
 */
function pointsToCommand(points: Number[][]): any {
  const command: any = {};

  if (points.length === 4) {
    command.x2 = points[2][0];
    command.y2 = points[2][1];
  }
  if (points.length >= 3) {
    command.x1 = points[1][0];
    command.y1 = points[1][1];
  }

  command.x = points[points.length - 1][0];
  command.y = points[points.length - 1][1];

  if (points.length === 4) { // start, control1, control2, end
    command.type = "C";
  } else if (points.length === 3) { // start, control, end
    command.type = "Q";
  } else { // start, end
    command.type = "L";
  }
  return command;
}

/**
 * Runs de Casteljau's algorithm enough times to produce the desired number of segments.
 * @param {Number[][]} points Array of [x,y] points for de Casteljau (the initial segment to split)
 * @param {Number} segmentCount Number of segments to split the original into
 */
function splitCurveAsPoints(
  points: Number[][],
  segmentCount: number
): Number[][][] {
  segmentCount = segmentCount || 2;

  const segments: any[] = [];
  let remainingCurve: any = points;
  const tIncrement: number = 1 / segmentCount;

  // x-----x-----x-----x
  // t=  0.33   0.66   1
  // x-----o-----------x
  // r=  0.33
  //       x-----o-----x
  // r=         0.5  (0.33 / (1 - 0.33))  === tIncrement / (1 - (tIncrement * (i - 1))

  // x-----x-----x-----x----x
  // t=  0.25   0.5   0.75  1
  // x-----o----------------x
  // r=  0.25
  //       x-----o----------x
  // r=         0.33  (0.25 / (1 - 0.25))
  //             x-----o----x
  // r=         0.5  (0.25 / (1 - 0.5))

  for (let i: number = 0; i < segmentCount - 1; i++) {
    const tRelative: number = tIncrement / (1 - (tIncrement * (i)));
    const split: any = decasteljau(remainingCurve, tRelative);
    segments.push(split.left);
    remainingCurve = split.right;
  }

  // last segment is just to the end from the last point
  segments.push(remainingCurve);

  return segments;
}

/**
 * Convert command objects to arrays of points, run de Casteljau's algorithm on it
 * to split into to the desired number of segments.
 * @param {Object} commandStart The start command object
 * @param {Object} commandEnd The end command object
 * @param {Number} segmentCount The number of segments to create
 */
export function splitCurve(
  commandStart: any,
  commandEnd: any,
  segmentCount: number
): any[] {
  const points: any[] = [[commandStart.x, commandStart.y]];
  if (commandEnd.x1 != null) {
    points.push([commandEnd.x1, commandEnd.y1]);
  }
  if (commandEnd.x2 != null) {
    points.push([commandEnd.x2, commandEnd.y2]);
  }
  points.push([commandEnd.x, commandEnd.y]);
  return splitCurveAsPoints(points, segmentCount)
    .map(pointsToCommand);
}
