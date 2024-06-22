(()=>{
  let userId: number | string;
  userId = 1212;
  userId = 'fdfdfs';

  function greeting(myText: string | number) {
    if (typeof myText === 'string') {
      console.log(`string ${myText.toLowerCase()}`);
    } else {
      console.log(`number ${myText.toFixed(1)}`);
    }
   }
  greeting('asas');
  greeting(1313.131)


})();
