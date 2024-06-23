//Con export se deduce que tiene que hacer la importacion de este archivo para poder implementarlo
export type Sizes = 'S' | 'M' | 'L' | 'XL';
export type Product = {
  title: string,
  createdAt: Date,
  stock: number,
  size?: Sizes,
};
