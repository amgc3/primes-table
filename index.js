const readline = require('readline-sync');
const {generateTable} = require('./prime')

const startingPoint = () => {
  console.log('Please enter number: '); 
  let n = readline.prompt();
  console.log(generateTable(n));
}
startingPoint();
