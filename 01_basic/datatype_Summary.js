// primitive data type 

// number , string , boolean , BigInt, symbol, null, undefined 

// const id = 5;
// const idUser = 5;

// const heroes = "rohit"

// const kya = true;

// let p1 = symbol("43")
// console.log(p1)


// const p2="";


// Reference (non primitive data type )

// Array, Object, function 

// const arr = ["rohit","yadav"]

// let obj = {
//     name : "rohit",
//     password:453434,
//     email : "rohit@gmail.com"
// }

// let myFunction = function(){
//     console.log("hello Wrold !!!");
// }

// console.log(typeof myFunction)



let userOne = {
    username : 'Rohit yadav',
    email : "rohit@google.com",
    upi : "upeae434343@##",
    password: 1122345,
}

let userTow = userOne

// console.table(userOne)
// console.table(userTow)


const name = "rohit"
console.log(name.toUpperCase())
const age = 25

const newName = new String("Rohit")
// console.log(newName.toLowerCase())



const newString = newName.slice(-2,4)
newString.substring(1,4)
console.log(newString)