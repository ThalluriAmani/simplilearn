var obj = {name : "JS"}

obj._proto_ =  Object.prototype;
console.log(obj.toString())
function Person(name){
    this.name = this.name;
}

Person.prototype.greet = function(){
    console.log(`Hello my name is ${this.name}`)
}

let person1 = new Person("Alice");
person1.greet();

let promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Promise resolved");

    },1000)
});
promise.then((message)=>{
    console.log(message)
})
console.log("A");
console.log("B");