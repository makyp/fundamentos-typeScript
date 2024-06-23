import { format, subDays } from "date-fns";
//subdays Resta de una fecha
const date = new Date(1994, 1, 28);
const rta = subDays(date,30);
const str  = format(rta, 'yyyy/MM/dd');
console.log(str)
