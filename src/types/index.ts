type TPoint = { r?: number, x: number, y: number };

type TTextWidth = {
  text: { h: number, value: string, w: number }[],
  max: { h: number, w: number }
};

export {
  TPoint,
  TTextWidth
};
