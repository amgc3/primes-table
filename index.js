const readline = require('readline-sync');
const {generatePrimesTable, generateFibonacciTable} = require('./prime')

const startingPoint = () => {
  console.log('Please enter number: '); 
  let n = readline.prompt();
  console.log('Please enter operator: +/* '); 
  let op = readline.prompt()
  console.log(generatePrimesTable(n, op))
}
startingPoint();
