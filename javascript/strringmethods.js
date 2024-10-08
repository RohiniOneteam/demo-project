// 1. length

// let word="oneteam"
// console.log(word.length)

// 2. charAt(index)
// let word="oneteam"
// console.log(word.charAt(1))

// concat(string1, string2, ...)

// let str1 = "Hello";
// let str2 = "World";
// console.log(str1.concat(" ", str2));

// includes(substring, start)
// let str = "Hello World";
// console.log(str.includes("world"));


// indexOf(substring, start)

// let str = "Hello World";
// console.log(str.indexOf("World"));

// lastIndexOf(substring, start)
// let str = "Hello World World";
// console.log(str.lastIndexOf("World")); 

// slice(start, end)
// let str = "programming";
// console.log(str.slice(0, 5));

// let str = "Hello World";
// console.log(str.toLowerCase());

// let str = "Hello World";
// console.log(str.toUpperCase());

// let str = "Hello World";
// let arr = str.split(" ");
// console.log(arr); 

// let str = "Hello World";
// console.log(str.replace("World", "Everyone"));

// let str = "Hello World";
// console.log(str.startsWith("Hello"));

// let str = "Hello World";
// console.log(str.endsWith("Word")); 

// let str = "Hello";
// console.log(str.repeat(3)); 


let num=15634
console.log(typeof(num))

let revnum=parseInt(num.toString().split('').reverse().join(''))
console.log(revnum)
console.log(typeof(revnum))