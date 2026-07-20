//  Implicit type conversion 

console.log("5"+5) // 55

console.log("7"-2) // 5

// how did the above code work?
// --> In the first example, when you use the `+` operator with a string and a number, JavaScript converts the number to a string and concatenates
//them. So `"5" + 5` becomes `"5" + "5"` which results in `"55"`.

// --> In the second example, when you use the `-` operator with a string and a number, JavaScript converts the string to a number 
//(if possible) and performs the subtraction. So `"7" - 2` becomes `7 - 2`, which results in `5`.

// this is because the `+` operator is used for both addition and string concatenation, while the `-` operator is only used for subtraction.


// explicit type conversion

let num =10;
let str = String(num); // convert number to string
console.log(typeof str)


let str1="123"
let number= Number(str1) // convert string to number
console.log(typeof number)

let numb = +str1 // convert string to number using unary plus operator
console.log(typeof numb)

let curr= '400 rs.'
console.log(parseInt(curr)) // convert string to number using parseInt  (400)

let c= 'rs. 400'  //Nan
console.log(parseInt(c)) // convert string to number using parseInt  (it will ignore the non-numeric characters at the beginning of the string)



let a= false;
let b = 0;
let d= null;

let z= a || b || d;
console.log(z) // null (it will return the first truthy value or the last falsy value)


let x = false
let y = 'Vivek'
let m = 'Rishi'

let n= x || y || m;
console.log(n) // Vivek (it will return the first truthy value or the last falsy value)


let defaultuser = "Vivek"
let user = "Akash"
console.log(defaultuser || user) // Vivek (it will return the first truthy value or the last falsy value)

let defaultuser1 = "prachi"
let user1= 'vivek'
let user2= 'rishi'
let ans= defaultuser1 && user1 && user2
console.log(ans) // rishi (it will return the first falsy value or the last truthy value)

let used ;
console.log(used ?? "Anonymous") // Anonymous (it will return the first defined value or the last value if all are undefined)


// loops

for(let i=0; i<5; i++){
    console.log("Hello World")
}


while(true){
    console.log("Hello World")
    break;
}

// for each loop

let obj ={
    name: "Vivek",
    age: 22,
    city: "Pune"
}
for(let key in obj){
    console.log(key, obj[key])
}


const subjects = ["Maths", "Science", "English", "Hindi"]
for(let subject of subjects){
    console.log(subject)
}