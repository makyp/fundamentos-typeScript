(()=>{
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,
  };

  const products: Product[]= [];//Asegura que el array cumpla con el tipado de objeto
  const addProduct = (data:Product) => {
    products.push(data);
  }

  addProduct({
    title:'P',
    createdAt: new Date(2003,1, 15),
    stock: 12,
    size: 'XL'

  });
  console.log(products)

})();
