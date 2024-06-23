(()=>{
  const login = (data:{email : string, password:string})=>{
    console.log(data.email,data.password);
  }
  login({
    email: 'maquip02@gmail.com',
    password: '4564564646we',
  })
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[]= [];

  const addProduct = (data:{
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes,

  })=>{
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
