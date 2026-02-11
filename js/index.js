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

//& 25- Welcome
// function welcome(language) {
//   const languages = {
//     english: "Welcome",
//     czech: "Vitejte",
//     danish: "Velkomst",
//     dutch: "Welkom",
//     estonian: "Tere tulemast",
//     finnish: "Tervetuloa",
//     flemish: "Welgekomen",
//     french: "Bienvenue",
//     german: "Willkommen",
//     irish: "Failte",
//     italian: "Benvenuto",
//     latvian: "Gaidits",
//     lithuanian: "Laukiamas",
//     polish: "Witamy",
//     portuguese: "Bem-vindo",
//     spanish: "Bienvenido",
//     swedish: "Valkommen",
//     welsh: "Croeso",
//   };
//   return languages[language] || languages.english;
// }
// console.log(welcome("dutch"));

//& 26- Sentence Smash

// function smash(words) {
//   return words.join(" ");
// }
// console.log(smash(["hello", "world", "this", "is", "great"]));

//& 27- Switch It Up

// function switchItUp(number) {
//   switch (number) {
//     case 0:
//       return "Zero";
//     case 1:
//       return "One";
//     case 2:
//       return "Two";
//     case 3:
//       return "Three";
//     case 4:
//       return "Four";
//     case 5:
//       return "Five";
//     case 6:
//       return "Six";
//     case 7:
//       return "Seven";
//     case 8:
//       return "Eight";
//     case 9:
//       return "Nine";
//     default:
//       return "Invalid number";
//   }
//   const words = [
//     "Zero",
//     "One",
//     "Two",
//     "Three",
//     "Four",
//     "Five",
//     "Six",
//     "Seven",
//     "Eight",
//     "Nine",
//   ];
//   return words[number];
// }
// console.log(switchItUp(8));

//& 28- Do I Get A Bonus

// function bonusTime(salary, bonus) {
//   return bonus ? `£${salary * 10}` : `£${salary}`;
// }
// console.log(bonusTime(10000, true));

//& 29- removeExclamationMarks
// function removeExclamationMarks(s) {
//   return s.split("!").join("")
// }
// console.log(removeExclamationMarks("Hello World!"))

//& 30- areYouPlayingBanjo

// function areYouPlayingBanjo(name) {
//   return name.startsWith("r") || name.startsWith("R")
//     ? name + " plays banjo"
//     : name + " does not play banjo";
// }
// console.log(areYouPlayingBanjo("aolf"));

//& 31- Remove First and Last Character
// function removeChar(str) {
//   if (str.length < 2) return " ";
//   return str.slice(1,-1)
// }
// console.log(removeChar("eloquent"));

//& 32- Unfinished Loop
// function createArray(number) {
//   const newArray = [];
//   for (let counter = 1; counter <= number; counter++ ) {
//     newArray.push(counter);
//   }
//   return newArray;
// }

// console.log(createArray(5));

//& 33- Transportation On Vacation
// function rentalCarCost(d) {
//   let total = d * 40;

//   if (d >= 7) {
//     total -= 50;
//   } else if (d >= 3) {
//     total -= 20;
//   }

//   return total;
// }
//& 34- Exclusive "or" (xor) Logical Operator
// function xor(a, b) {
//   return a===b? false:true
// }

//& 35- Find the first non consecutive number
// function firstNonConsecutive(arr) {
//   for (let i = 1; i < arr.length; i++) {
//[1, 2, 3, 4, 6]
//     if (arr[i] !== arr[i - 1] + 1) {
//       return arr[i];
//     }
//   }
//   return null;
// }

//& 36- Volume Of a Cubiod

// class Kata {
//   static getVolumeOfCuboid(length, width, height) {
//     return length * width * height;
//   }
// }
// console.log(Kata.getVolumeOfCuboid(2, 3, 4));
//& 37- Formatting To Decimal Places
// function hexToDec(hexString){
// return parseInt(hexString,16)
// }

//& 38- Grasshopper - Basic Function Fixer
// function addFive(num) {
//   var total = num + 5
//   return total
// }

//& 39- Find The Position
// function position(letter) {
//   const alphabetObject = {
//     a: 1,
//     b: 2,
//     c: 3,
//     d: 4,
//     e: 5,
//     f: 6,
//     g: 7,
//     h: 8,
//     i: 9,
//     j: 10,
//     k: 11,
//     l: 12,
//     m: 13,
//     n: 14,
//     o: 15,
//     p: 16,
//     q: 17,
//     r: 18,
//     s: 19,
//     t: 20,
//     u: 21,
//     v: 22,
//     w: 23,
//     x: 24,
//     y: 25,
//     z: 26,
//   };
//   return `Position of alphabet: ${alphabetObject[letter]}`;
// }
// console.log(position("b"));

//& 40- Opposites attract
// function lovefunc(flower1, flower2) {
//   return (flower1 % 2 === 0 && flower2 % 2 !== 0) ||
//     (flower2 % 2 === 0 && flower1 % 2 !== 0)
//     ? true
//     : false;
// }

// console.log(lovefunc(4, 4));
//& 41- No Zeros For Heros
// function noBoringZeros(n) {
//   return n == 0 ? 0 : Number(n.toString().replace(/0+$/, ""));
// }
// console.log(noBoringZeros(96000));

//& 42- Get The Mean Of An Array
// function getAverage(marks) {
//   return Math.floor(
//     marks.reduce((res, item) => (res += item), 0) / marks.length,
//   );
// }

//& 43- Vowel Remover
// function shortcut(string) {
//   const vowels = ["a", "e", "i", "o", "u"];
//   let result = "";
//   for (let i = 0; i < string.length; i++) {
//     if (!vowels.includes(string[i])) {
//       result += string[i];
//     }
//   }
//   return result;
// }

// console.log(shortcut("hello"));
//& 44- Remove Exclamation Marks
// function removeExclamationMarks(s) {
//   return s.replaceAll("!", "");
// }
// console.log(removeExclamationMarks("!he!llo!"));
//& 45- Beginner - Reduce but Grow
// function grow(arr) {
//   return arr.reduce((result, item) => (result *= item), 1);
// }
// console.log(grow([1,2,3,4]))
//& 46- Array plus array
// function arrayPlusArray(arr1, arr2) {
// let sum = 0;
// for (let i = 0; i < arr1.length; i++) {
//   sum += arr1[i];
// }
// for (let j = 0; j < arr2.length; j++) {
//   sum += arr2[j];
// }
// return sum;
//   return [...arr1 , ...arr2].reduce((sum,item)=>sum+=item,0)
// }
// console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
//& 47- isPalindrome
// function isPalindrome(x) {
//   return x.split("").reverse().join("") === x
// }
// console.log(isPalindrome("level"))

//& 48- Grasshopper - Summation
// var summation = function (num) {
//   let newArray = Array.from({ length: num }, (_, i) => i + 1);
//   //  let newArray = Array(num).fill(0).map((_, i) => i + 1);
//   console.log(newArray);
//   return newArray.reduce((result, item) => (result += item), 0);
// };
// console.log(summation(8));
//& 49- Printing Array elements with Comma delimiters
// function printArray(array) {
// return array.join(",")
// }
// console.log(printArray(["h","o","l","a"]))

//& 50- How Many Stairs Will Suzuki Climb
// function stairsIn20(s) {
//   let innerSum = 0;
//   for (let i = 0; i < s.length; i++) {
//     for (let inner = 0; inner < s[i].length; inner++) {
//       innerSum += s[i][inner];
//     }
//   }
//   return innerSum * 20;
// }
//& 51- Remove First and Last Character Part Two
function array(string) {
  let result;
  if (!string) return null;
  result = string.split(",").slice(1, -1);
  return result.length === 0 ? null : result.join(" ");
}
console.log(array("1,2,3,4"));
