//* 100 probelm in javascript

//& 1- even and odd
// function evenOrOdd(number) {
//   if (number % 2 == 0) {
//     return `${number} is Even `;
//   } else {
//     console.log();
//     return `${number} is Odd `;
//   }
// }
// console.log(evenOrOdd(3))

//& 2- Sum of positive
// function positiveSum(arr) {
//   return arr.reduce((sum, num) => (num > 0 ? (sum += num) : sum), 0);
// }
// console.log(positiveSum([1, -4, 7, 12]));

//& 3- Sum without highest and lowest number
// function sumArray(array) {
//   if (!Array.isArray(array) || array.length < 2) return 0;
//   let sortedArr = array.sort((a, b) => a - b);
//   let newArr = sortedArr.slice(1, -1);
//   return newArr.reduce((sum, item) => (sum += item), 0);
// }
// console.log(sumArray([1, 1, 11, 2, 3]));

//& 4-  String-repeat
// function repeatStr(n, s) {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     result += s;
//   }
//   return result;
// Another Solution -> return s.repeat(n);
// }
// console.log(repeatStr(5, "Hello"));

//& 5-  Convert number to reversed array of digits
// function digitize(n) {
//   let newarr = [...n.toString()];
//   let numed = newarr.map((item) => Number(item));
//   return numed.reverse();

// Another Solution -> return newarr = [...String(n)].reverse().map(Number)
// }

// console.log(digitize(35231));

//& 6-  Counting sheep...
// function countSheeps(arrayOfSheep) {
//   let count = 0;
//   for (let i = 0; i < arrayOfSheep.length; i++) {
//     if (arrayOfSheep[i]) count++;
//   }
//   return count;

// Another Solution -> return arrayOfSheep.filter(Boolean).length
// }

// const sheeps = [
//   true,
//   true,
//   true,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   true,
//   false,
//   true,
//   false,
//   false,
//   true,
//   true,
//   true,
//   true,
//   true,
//   false,
//   false,
//   true,
//   true,
// ];

// console.log(countSheeps(sheeps));

//& 7-  Opposite number
// function opposite(number) {
//   return -number;
// }
// console.log(opposite(33));

//& 8-  Returning negative
// function makeNegative(num) {
//   return num>0? -num :num
// }
// console.log(makeNegative(-5));

//& 9- Jenny's secret message
// function greet(name) {
//   if (name === "Johnny") return "Hello, my love!";
//   return "Hello, " + name + "!";
// }
// console.log(greet("Johnny"));

//& 10- A Needle In The HayStack
function findNeedle(haystack) {
  return haystack.reduce(
    (result, item, index) =>
      item === "needle" ? `found the needle at position ${index}` : result,
    ""
  );
  // for (let i = 0; i < haystack.length; i++) {
  //   if (haystack[i] === "needle") {
  //     return `found the needle at position ${i}`;
}
let example = ["hay", "junk", "hay", "hay", "needle", "moreJunk", "randomJunk"];
console.log(findNeedle(example));
