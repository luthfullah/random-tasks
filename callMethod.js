const cricketer={
    fname:"Shahid",
    lname:"Afridi",
    functionName: function(){
      return `${this.fname} ${this.lname}`
    }
}
const newPlayer={
    fname:"Shoaid",
    lname:"Akhtar",
}
console.log(cricketer.functionName()) //Shahid Afridi
console.log(cricketer.functionName.call(newPlayer)) // Shoaid Akhtar

