const readline = require('readline-sync');
const {generateTable} = require('./prime2')

const startingPoint = () => {
  console.log('Please enter number: '); 
  let n = readline.prompt();
  console.log(generateTable(n));
}
startingPoint();
