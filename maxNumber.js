function maxNumber(max){
    for (let i=0; i <max.length; i++){
        for(let j=0; j<max.length;j++){
            if(max[i]>max[j]){
                console.log("i ",max[i]," is greater than ", max[j])
            }
        }
    }
}
console.log(maxNumber([1,2,3,4,,6,7,10,30,8,4,7,23,11]))

// output:  
//  i  2  is greater than  1
//   i  3  is greater than  1
//   i  3  is greater than  2
//   i  4  is greater than  1
//   i  4  is greater than  2
//   i  4  is greater than  3
//   i  5  is greater than  1
//   i  5  is greater than  2
//   i   5 is greater than  3
//   i  5  is greater than  4
//   i  6  is greater than  1
//   i  6  is greater than  2
//   i  6  is greater than  3
//   i  6  is greater than  4
//   i  6  is greater than  
//   i  6  is greater than  4
//   i  7  is greater than  1
//   i  7  is greater than  2
//   i  7  is greater than  3
//   i  7  is greater than  4
//   i  7  is greater than  
//   i  7  is greater than  6
//   i  7  is greater than  4
//   i  10  is greater than  1
//   i  10  is greater than  2
//   i  10  is greater than  3
//   i  10  is greater than  4
//   i  10  is greater than  
//   i  10  is greater than  6
//   i  10  is greater than  7
//   i  10  is greater than  8
//   i  10  is greater than  4
//   i  10  is greater than  7
//   i  30  is greater than  1
//   i  30  is greater than  2
//   i  30  is greater than  3
//   i  30  is greater than  4
//   i  30  is greater than  
//   i  30  is greater than  6
//   i  30  is greater than  7
//   i  30  is greater than  10
//   i  30  is greater than  8
//   i  30  is greater than  4
//   i  30  is greater than  7
//   i  30  is greater than  23
//   i  30  is greater than  11
//   i  8  is greater than  1
//   i  8  is greater than  2
//   i  8  is greater than  3
//   i  8  is greater than  4
//   i  8  is greater than  
//   i  8  is greater than  6
//   i  8  is greater than  7
//   i  8  is greater than  4
//   i  8  is greater than  7
//   i  4  is greater than  1
//   i  4  is greater than  2
//   i  4  is greater than  3
//   i  7  is greater than  1
//   i  7  is greater than  2
//   i  7  is greater than  3
//   i  7  is greater than  4
//   i  7  is greater than  
//   i  7  is greater than  6
//   i  7  is greater than  4
//   i  23  is greater than  1
//   i  23  is greater than  2
//   i  23  is greater than  3
//   i  23  is greater than  4
//   i  23  is greater than  
//   i  23  is greater than  6
//   i  23  is greater than  7
//   i  23  is greater than  10
//   i  23  is greater than  8
//   i  23  is greater than  4
//   i  23  is greater than  7
//   i  23  is greater than  11
//   i  11  is greater than  1
//   i  11  is greater than  2
//   i  11  is greater than  3
//   i  11  is greater than  4
//   i  11  is greater than  
//   i  11  is greater than  6
//   i  11  is greater than  7
//   i  11  is greater than  10
//   i  11  is greater than  8
//   i  11  is greater than  4
//   i  11  is greater than  7
 