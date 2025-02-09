// 1) primitive data type---- if increment 1 num then it will not same for other

// let num1 = 8;
// let num2 = num1;
// console.log("value of num1 is:",num1); //8
// console.log("value of num2 is:",num2); //8
// num1++;
// console.log("after increment number num1");
// console.log("num1 is",num1); //9
// console.log("num2 is", num2); //8



// 2) reference types---- if you're incrementing onky 1 array it will reflect another also

let array1 = ["item1","item2"];
let array2 = array1;
console.log("value of array1 is:",array1);
console.log("value of array2 is:",array2);
array1.push("item3");
console.log("after incrementing value of array1");
console.log("array1",array1);
console.log("array2",array2);
 







