let str = "JavaScript";

console.log(str[0]);

console.log(str[4]);
console.log(str[100]);

console.log(str);

str = str+"!";

console.log(str);

console.log("5"+2);
console.log("5"-2);

let text = "";

for(let i=0;i<100;i++)
{
    text += i;

}
console.log(text);

"Hello".toUpperCase();
"Hello".toLowerCase();

//trim,trimstart,trimend
"   Hello  ".trim();
"   Hello   ".trimEnd;
"   Hello    ".trimStart;

//Extraction parts of a string

let str2 = "Hello world";
console.log(str2.slice(0,5));
console.log(str2.substring(7,12));

//string interpolation

let a = 10;
let b = 20;
console.log(`Sum is ${a+b}`)

let text1 = `Hello  

world`;
console.log(text1);

// character access
let s ="JS";
console.log(s[0]);
console.log(s.charAt[1]);

//string comparision

console.log("10"==10);
console.log("10"===10);
//Avoid using == it creates some problems

console.log("apple".localeCompare("banana"));
console.log("banana".localeCompare("apple"));
console.log("apple".localeCompare("apple"));


let names = ["alice",'hello','bob',"charlie"];
names.sort((a,b)=>a.localeCompare(b));
console.log(names);

let ids = [1,3,2,4,56,7];
ids.sort((a,b)=>a-b);
console.log(ids);


console.log("A".length);
console.log("😊".length);
console.log("A".codePointAt(0));

let emoji = '😊'
console.log(emoji[0]);
console.log(emoji[1]);




for (let char of "😊😒"){
    console.log(char)
}

for (let i=0;i<"😊".length;i++){
    console.log("😊"[i]);
}

console.log(String.fromCodePoint(128512));

//regex

let regex = /js/;
console.log(regex.test("I love js"));

//match
let str3 = "I love JavaScript";
console.log(str3.match(/JavaScript/));

//replace -replace all occurences
let str4 = "I love javascript. JavaScript is great!";
console.log(str4.replace(/javascript/g,"JS"));

//search -search for a pattern

let str5 = "i love javascript";

console.log(str5.search(/javascript/));

console.log ("JS js Js".match(/js/gi));

console.log("apple".match(/[aeiou]/g));
console.log("123-456-7890".match(/\d{3}-\d{3}-\d{4}/))

console.log("hello world".match(/^hello/))

console.log("11111111111".match(/\d{10}/))

//encoding
console.log(encodeURIComponent("Hello world!"));
console.log(decodeURIComponent("Hello %20 World"));

//passing function as a argument

function greet(name){
    console.log(`hello , ${name}`);

}
function processUserInput(callback){
    let name = "ddgfdg";
    callback(name);
}
processUserInput(greet);

//setTimeOut

setTimeout(()=>{
    console.log("this is displayed after 2 sec")
},2000);

//function returning another function

function outerFunction(){
    let count = 0;
    return function innerFunction(){
        count++;
        console.log(`count : ${count}`);

    }
}

const counter = outerFunction();
counter();
counter();

function multipler(x){
    return function(y){
        return x*y;
    }
}
let double =  multipler(2);
console.log(double(5));














