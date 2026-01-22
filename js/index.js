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
// function findNeedle(haystack) {
//   return haystack.reduce(
//     (result, item, index) =>
//       item === "needle" ? `found the needle at position ${index}` : result,
//     ""
//   );
//   // for (let i = 0; i < haystack.length; i++) {
//   //   if (haystack[i] === "needle") {
//   //     return `found the needle at position ${i}`;
// }
// let example = ["hay", "junk", "hay", "hay", "needle", "moreJunk", "randomJunk"];
// console.log(findNeedle(example));

//& 11-  Count of positives / sum of negatives
// function countPositivesSumNegatives(arr) {
//   let resultArr = [];
//   let countPos = 0;
//   let negSum = 0;
//   if (!arr || arr.length === 0) {
//     return [];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       countPos++;
//     } else if (arr[i] < 0) {
//       negSum += arr[i];
//     }
//   }
//   resultArr.unshift(countPos);
//   resultArr.push(negSum);
//   return resultArr;
// }
// console.log(
//   countPositivesSumNegatives([
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
//   ])
// );

//& 12-  Double Char
// function doubleChar(str) {
//   return str.split("").map((item) => item + item).join("")
// }

// console.log(doubleChar("String"));

//& 13-  Basic Mathematical Operations
// function basicOp(operation, value1, value2) {
//   // if (operation === "+") {
//   //   return value1 + value2;
//   // } else if (operation === "-") {
//   //   return value1 - value2;
//   // } else if (operation === "*") {
//   //   return value1 * value2;
//   // } else {
//   //   return value1 / value2;
//   // }
//   // Another solution -->
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//   }
// }

// console.log(basicOp("-", 4, 7));

//& 14-  Double Char
// function squareOrSquareRoot(arr) {

//   return arr.map(num => {
//     const sqrt = Math.sqrt(num);
//     return Number.isInteger(sqrt) ? sqrt : num * num;
//   });

// }

// console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));

//& 15- Count By X
// function countBy(x, n) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(x * i);
//   }
//   return z;

// }
// console.log(countBy(3, 4));

//& 16- Remove String Spaces
// function noSpace(x){
//  return x.replaceAll(" ","")
// return x.split(" ").join("")
// }
// console.log(noSpace("8aaaaa dddd r     "));

//& 17-  Invert values
// function invert(arr) {
//   return arr.map((item) => -item);
// }

// console.log(invert([1, -2, 3, -4, 5]));

//& 18- Convert boolean values to strings
// function boolToWord(bool) {
//   if (bool) {
//     return "Yes";
//   } else {
//     return "No";
//   }
// }
// console.log(boolToWord(true));

//& 19- Reversed Strings
// function solution(str) {
//   return str.split("").reverse().join("");
// }
// console.log(solution("world"));

//& 20- Keep Hydrated
// function litres(time) {
//   return Math.floor(time * 0.5);
// }
// console.log(litres(3));
//& 21-  Convert a Number to a String
// function numberToString(num) {
// //   return num.toString()
// return String(num)
// }
// console.log(numberToString(3));

//& 22- Find Average
// function findAverage(array) {
//   if (array.length === 0) return 0;
//   return array.reduce((sum, item) => (sum += item), 0) / array.length;
// }
// console.log(findAverage([1, 2, 3, 4]));

//& 23- Convert a String to a Number
// const stringToNumber = function(str){

//  return Number(str)
// }
// console.log(stringToNumber("1234"));
//& 24- Count The Monkeys

// function monkeyCount(n) {
//   let result=[]
//   for(let i=1 ;i<=n;i++){
//     result.push(i)
//   }
//   return result
//  // return Array.from({ length: n }).map((_, i) => i + 1);
// }
// console.log(monkeyCount(5));
