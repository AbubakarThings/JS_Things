
let Str = "DATA TYPES"
let str1 = "(PRIMITIVE DATA_TYPES)"
let str2 = "They can hold a single simple value. String, Number, BigInt, Boolean, undefined, null, and Symbol"

console.table([Str,str1, str2])

console.log("STRING DATA_TYPE") //String 

// string enclosed within single quotes
let fruit = 'apple';

// string enclosed within double quotes
let country = "USA";

// string enclosed within backticks
let result = `fail`;



console.table([fruit,country,result])

console.log("   ")

console.log("INTEGER [DATA_TYPE]")// integer value

let int = -3;
var x = "INTEGER VALUE"




let float = 3.15; // floating-point value
var y = "FLOAT VALUE"

console.table([int,x,float,y])


console.log("   ")
console.log("BOOLEAN DATA_TYPE")
let dataChecked = true;
console.log(dataChecked);  // true


let valueCounted = false;
console.log(valueCounted);  // false

console.log(" ")

console.log("NULL DATA_TYPE")
let name;
console.log(name);  // undefined

console.log(" ")

console.log("Symbol Data_Type")
// two symbols with the same description
let val1 = Symbol("programiz");
let val2 = Symbol("programiz");

console.log(val1 === val2);  // false



console.log("  ")
console.log("BIG_INT VALUE")
// BigInt value
let value1 = 900719925124740998n;

// add two big integers
let result1 = value1;
console.log(result1);  // "900719925124740999n"