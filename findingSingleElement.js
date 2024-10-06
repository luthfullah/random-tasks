function fun(numbers){
    return numbers.reduce((acc,number)=>acc ^ number,0) === 0 ? "there is no single values" : numbers.reduce((acc,number)=>acc ^ number,0)
}
console.log(fun([1,2,1,2,3,4,3,4,5]))
// output:  5