const numbers = [23, 1, 45, 87, 4, 55, 6];
let largestNumber = 0;

for (const number of numbers) {
  if (number > largestNumber) {
    largestNumber = number;
  }
}
console.log(largestNumber);
