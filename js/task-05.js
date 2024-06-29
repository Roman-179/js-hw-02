const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];
const arrays = array1.concat(array2);
let sum = 0;

for (const array of arrays) {
  sum += array;
}
console.log(sum);
