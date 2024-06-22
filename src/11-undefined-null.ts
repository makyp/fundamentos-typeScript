(()=>{

  let myNull: null = null;
  let myUndefined: undefined = undefined;
  let myNumber: number | null = null;
  myNumber = 12;
  let myString: string | undefined = undefined;
  myString = 'sjjdjd'
   function hi(name: string|null){
    let hello = ' Hola'
    if (name){
      hello += name;
    }else{
      hello += ' nobody';

    }
    console.log(hello)
   }

   function hiV2(name: string|null){
    let hello = ' Hola'
    hello += name?.toLowerCase() || ' nobody';//El signo de pregunta valida si eso no existe toda la expresion devuelve null
    console.log(hello)

  }

   hi('Nicolas');
   hi(null);
   hiV2(' Santi')
   hiV2(null)
})();
