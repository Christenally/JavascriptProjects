"use strict";

//1. basic Destructuring
// const colors = ["red", "green", "blue"];

// let [red, green, blue] = colors;

// console.log(red, green, blue);

//2. Skipping Items
// const numbers = [10, 20, 30, 40];

// const [first, , third] = numbers;

// console.log(first, third);

//3. Default Values
// const fruits = ["apple"];

// const [firstFruit = "banana", secondFruit = "banana"] = fruits;

// console.log(firstFruit, secondFruit);

//4. Swapping variables

// let x = 1;
// let y = 2;

// [x, y] = [y, x];

// console.log(x, y);

//5. Nested Destructuring
// const nested = [1, [2, 3], 4];

// const [a, [b, c], d] = nested;
// console.log(a, b, c, d);

//6.Rest Operator - haven't learned this yet
// const letters = ["a", "b", "c", "d", "e"];

//7. Destructuring in Function parameters
// function printCoords([x, y]) {
//   console.log(`x is ${x}. y is ${y}`);
// }

// const point = [5, 10];
// printCoords(point);

//8. Returning Multiple values
// function getValues() {
//   return [100, 200, 300];
// }

// const [val1, val2, val3] = getValues();
// console.log(val1, val2, val3);

//9.Combining Destructing with Spread
// const data = [1,2,3,4,5];
//Haven't learned this yet

//10. Practical Example(Swapping in Array)
const array = ["first", "second", "third"];

[array[0], array[2]] = [array[2], array[0]];

console.log(array);
