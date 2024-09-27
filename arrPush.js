const arr=["x","y"]
const arr2=["a","b"]

arr2.push(arr)
console.log(arr2)

// output: [
//     "a",
//     "b",
//     [
//         "x",
//         "y"
//     ]
// ]