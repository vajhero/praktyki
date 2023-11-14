const arr1 = ["Anna", "Maria"];
const arr2 = ["Adam", "Marek", "Bartek", "Tomek"];
const numbers = [1, 2, 3, 4, 5];

//1
const arraysConcat = (arr1, arr2) => arr1.concat(arr2);
console.log(arraysConcat(arr1, arr2));

//2
const lastElement = (arr) => arr.reverse()[0];
console.log(lastElement(arr2));

//3
const arrayFilter = (arr, minValue = 0) => arr.filter((element) => element == minValue);
console.log(arrayFilter(numbers, 2));

//4
const arraySum = (arr, start = 0) => arr.reduce((result, element) => result + element, start);
console.log(arraySum(numbers, 10));

//5
const arrayMap = (arr) => arr.map((element) => Math.pow(element, 2) + 3);
console.log(arrayMap(numbers));

//dodatkowe 1
const filterEven = (arr) => arr.filter((element) => element % 2 == 0);
console.log(filterEven(numbers));

//dodatkowe 2
const showMin = (arr) => arr.reduce((min, current) => (current < min ? current : min));
console.log(showMin(numbers));