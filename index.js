const readline = require('readline-sync');
const {generatePrimesTable, generateFibonacciTable} = require('./prime')

const startingPoint = () => {
  console.log('Please enter number: '); 
  let n = readline.prompt();
  console.log(generateFibonacciTable(n));
  console.log(generatePrimesTable(n))
}
startingPoint();
