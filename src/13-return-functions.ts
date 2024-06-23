(()=>{
  const calcTotal = (prices: number[]): string =>{
    let total = 0;
    prices.forEach((item)=>{
      total += item;
    });
    return total.toString();
  }


  const rta = calcTotal([1,5,6,1])
  console.log(rta);
  //Sin retorno
   const printTotal = (prices:number[]):void =>{
    const rta = calcTotal(prices);
    console.log(`El total es ${rta}`);
   }
  printTotal([1,56,7,1,5,16]);

})();
