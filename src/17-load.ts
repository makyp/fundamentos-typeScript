//var _ = require('lodash');//Como se transfotma
import _ from 'lodash';
const data =[
  {
    username : 'nico',
    role: 'admin',
  },
  {
    username : 'valentina',
    role: 'seller',
  },
  {
    username : 'paula',
    role: 'seller',
  },
  {
    username : 'nico',
    role: 'customer',
  }

];

const rta = _.groupBy(data, (item) => item.role);
console.log(rta);
