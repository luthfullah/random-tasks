function Animal(){}
Animal.prototype.home=()=>{
    console.log("hello")
}
function Bird(){}
Bird.prototype=Object.create(Animal.prototype)
const bird=new Bird()
bird.home()

// output:hello