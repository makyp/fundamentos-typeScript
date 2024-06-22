(()=>{
  let myDynamicVar: any;
  //Puede tomar cualquiera pero es una mala practica

  myDynamicVar = 100; // number
  myDynamicVar = null;
  myDynamicVar = {}; // Object
  myDynamicVar = ""; // string
  //Any existe porque sirve para ser de manera incremental
  //Sirve para librerias que no estan tipadas o en procesos de migracion

  //Se puede obligar a que sea un tipo de dato puntual para realizar acciones como
  myDynamicVar = "HOLA"; //Para que sea un string
  const otherString = (myDynamicVar as string).toLowerCase();
  myDynamicVar = 1212;//Para que sea entero
  const otherNumber = (<number>myDynamicVar).toFixed();


})();
