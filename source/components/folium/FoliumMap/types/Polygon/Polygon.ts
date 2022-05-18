export type Location = [number, number];

type Polygon = {
  locations: Location[];
  popup?: string;
  tooltip?: string;
};

export default Polygon;
