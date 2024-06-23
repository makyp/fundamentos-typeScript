import {Product} from './product.model' //Dentro de las llaves va lo que me quiero traer

export const products: Product[]= [];

export const addProduct = (data:Product) => {
  products.push(data);
}

export const calcStock = (): number =>{
  let total = 0;
  products.forEach((item)=>{
    total += item.stock;

  });
  return total;
}
