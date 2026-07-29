let a = ["html", "css", "js", "react", "nodejs"]
// if you want to combine array of string with specified seperator then we can use join method
console.log(a.join(" | ")) // html | css | js | react | nodejs


let a1= [11,12,13]
let a2= [14,15,16]
let a3= [17,18,19]
let newAee= a1.concat(a2,a3)
console.log(newAee) // [11, 12, 13, 14, 15, 16, 17, 18, 19]


let arr= [30,40,50]
arr.unshift(10,15)
console.log(arr) // [10, 15, 30, 40, 50]  unshift method adds one or more elements to the beginning of an array and returns the new length of the array. 
//This method changes the length of the array.

let arr1= [10,20,30]
arr1.shift()
console.log(arr1) // [20, 30] shift method removes the first element from the array and returns that removed element.
//  This method changes the length of the array.

// pop-> will remove last element
let arr2= [10,20,30,40,50]
arr2.pop()
console.log(arr2) // [10, 20, 30, 40] pop method removes the last element from an array and returns that element. 

// splice-> will remove element from specified index and also we can add new element at specified index
let arr3= [10,20,30,40,50]
arr3.splice(2,1) // 2-> index from where we want to remove element and 1-> how many elements we want to remove

arr3.splice(2,0,90,100,110)
console.log(arr3) // [10, 20, 90, 100, 110, 40, 50] this means we have added 90,100,110 at index 2 and removed 0 elements from index 2


// slice-> will return new array from specified index to specified index
let arr4= [10,20,30,40,50]
let newArr= arr4.slice(2,4) // 2-> starting index and 4-> ending index (exclusive)
console.log(newArr) // [30, 40]
console.log(arr4) // [10, 20, 30, 40, 50] slice method does not change the original array.



