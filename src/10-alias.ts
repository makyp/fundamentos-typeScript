(()=>{
  /**
   * // definiendo un tipo //!alias type
   */
  type UserID =  string | number ;

  let userId: UserID;
  //Literal types
  //Puede limitar sus datos por ejemplo en este caso con las tallas de ropa
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  let shirSize: Sizes;
  shirSize = 'M';
  shirSize = 'L';
  shirSize = 'XL';

  function greeting(userId:UserID, Sizes:Sizes){
    if (typeof userId === 'string'){
      console.log(`string ${userId.toLowerCase()}`);
    }
  }

  greeting(121, "L")
  //greeting(156, "tr")//Causa error porque tr no esta dentro de las tallas

})();
