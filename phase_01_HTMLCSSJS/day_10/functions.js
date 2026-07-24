function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(5, 10)); // Output: 15

let x = function(a){
    return a**2;
}
console.log(x(4)); // Output: 16


let checknationality = function(country="India"){
    return `I am from ${country}`;
}
let res= checknationality("USA");
console.log(res); // Output: I am from USA


let x1= (a) => a%2==0;
console.log(x1(4)); // Output: true


let res2=(a,b)=>{
    let c=10
    let num=(a+b)-c
    return num
}
console.log(res2(5,10)); // Output: 5






