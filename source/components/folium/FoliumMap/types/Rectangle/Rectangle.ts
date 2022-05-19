export type Bound = [number, number];

type Rectangle = {
  bounds: [Bound, Bound];
  color?: string;
  weight?: number;
  fill?: boolean;
  fillColor?: string;
  fillOpacity?: number;
  dashArray?: string;
};

export default Rectangle;
