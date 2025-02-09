// compare two array with same elements---------
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// console.log("array1",array1);
// console.log("array2",array2);
// console.log(array1===array2);   


// -----------------------------
// let array1 = ["item1", "item2"];
// let array2 = ["item1", "item2"];
// array1.push("item3");
// console.log("array1",array1);
// console.log("array2",array2);
// console.log(array1===array2);

// concatenate two arrays
//  method-1    slice
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0);
// console.log("array1",array1);
// console.log("array2",array2);

// method-2    concat
// let array1 = ["item1", "item2"];
// let array2 = [].concat(array1);
// array1.push("item3")
// console.log("array1",array1);
// console.log("array2",array2);

// method-3    spread operator
// let array1 = ["item1", "item2"];
// let array2 = [...array1];
// console.log("array1",array1);
// console.log("array2",array2);



//method-4
// let array1 = ["item1", "item2"];
// let array2 = array1.slice(0).concat(["item3","item4"]);
// console.log("array1",array1);
// console.log("array2",array2);



//method-5
//  let array1 = ["item1", "item2"];
//  let array2 = [...array1,"item7","item8"];
//  console.log("array1",array1);
//  console.log("array2",array2);



//method-6
let array1 = ["item1","item2"];
let array2 = ["value1","value2"];
let array3 = [...array1, ...array2];
console.log("array1",array1);
console.log("array2",array2);
console.log("array3",array3);



 








