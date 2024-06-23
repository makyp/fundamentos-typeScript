import {addProduct, calcStock, products} from './product.service';

addProduct({
  title: 'pa',
  createdAt: new Date (2006, 1, 1),
  stock: 5,
});

console.log(products);
const total = calcStock();
console.log(total)
