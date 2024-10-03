const arr=[10,30,20,40,50,35,50,22]

let highest=arr[0]
for(let j=0; j<arr.length;j++){
    if(arr[j]>highest){
        highest=arr[j]
    }
}
console.log("highest value is :",highest)

let sma=arr[0]
let newArr=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]<highest){
        newArr.push(arr[i])
        sma=arr[i]
    }
}
console.log("luthfi your smallest values list is : ",newArr)