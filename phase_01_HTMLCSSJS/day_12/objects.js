// // by using object constructor method 
// let student = new Object();
// student.name = "John";
// student.age = 20;
// student.grade = "A";
// console.log(student);


// let obj = {model : "BMW", color: "black", year: 2020};
// delete obj.year;
// console.log(obj);

// let obj1 = {model : "tesla"}
// console.log(obj1.hasOwnProperty("model")); // true

// let obj2 ={ name: "John", age: 30, city: "New York" };
// console.log(Object.keys(obj2)); // ["name", "age", "city"]

let studen= {
    name : "John",
    age : 20,
    address : {
        street : "123 Main St",
        city : "New York",
        state : "NY"
    }
}
console.log(studen.address.city); // "New York"
console.log(studen.address['state']); // "NY"


let {name, age,city} = studen;
console.log(name);
console.log(age);


// take one nested obj in studen and define aadhar card and pan card in it and print 
studen.aaadharCard = {
    aadharNumber : "1234-5678-9012",
    panNumber : "ABCDE1234F"
}
console.log(studen.aaadharCard.aadharNumber);
console.log(studen.aaadharCard.panNumber);

// deconstructuring the nested object
let {aadharNumber, panNumber} = studen.aaadharCard;
console.log(aadharNumber);
console.log(panNumber);

