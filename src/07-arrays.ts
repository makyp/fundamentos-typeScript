(()=>{
  let prices = [1,2,6131,314, 'hola', true]
   prices.push(12123)

   let products = ['hola', true]
   products.push(false)


  //Especificar que tipo de datos quiero que reciba mi array
   let mixed: (number | string | boolean) [] = ['hola', true]
   mixed.push(12)

})();
