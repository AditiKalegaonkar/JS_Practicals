
let num = parseInt(process.argv[2]);
if (isNaN(num)) {
  console.log("Please enter a valid number!");
  console.log("Usage: node table.js <number>");
  process.exit(1);
}


console.log(`\nMultiplication table of ${num} using FOR loop:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${num * i}`);
}

console.log(`\nMultiplication table of ${num} using WHILE loop:`);
let j = 1;
while (j <= 10) {
  console.log(`${num} x ${j} = ${num * j}`);
  j++;
}

console.log(`\nMultiplication table of ${num} using DO-WHILE loop:`);
let k = 1;
do {
  console.log(`${num} x ${k} = ${num * k}`);
  k++;
} while (k <= 10);
