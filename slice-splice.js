const arr = [1, 2, 3, 4, 5];
const stri = "hello this is luthfi";
console.log(stri.slice(1, 6)); //output: ello
console.log(arr.slice(2, 3)); //output: 3\

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
let arrayIntegers4 = arrayIntegers.slice(-3, -1); //returns [3, 4]

// The slice() method returns the selected elements in an array as a new array object.
// It selects the elements starting at the given start argument, and ends at the given optional end
// argument without including the last element. If you omit the second argument then it selects till
// the end of the array. This method can also accept negative index which counts back from the end of the array.



let arrayIntegersOriginal1 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal2 = [1, 2, 3, 4, 5];
let arrayIntegersOriginal3 = [1, 2, 3, 4, 5];

let arrayInteger = arrayIntegersOriginal1.splice(3,2 ); // 4,5 (index, number of elements)
let arrayIntege = arrayIntegersOriginal2.splice(3); //4,5
console.log(arrayInteger)
console.log(arrayIntege)