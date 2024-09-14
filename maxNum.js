function maxNum(max){
    let maximum=0
    for (let i=0; i< max.length; i++){
        if(max[i] > maximum){
            maximum =max[i]
        }
       
    } return maximum
}
console.log(maxNum([2,11,3,2,4,8,4,9,10])) //output: 11
