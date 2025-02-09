// 1
// const myVar = ["item1", "item2"];
// let var1 = myVar[0];
// let var2 = myVar[1];
// console.log("var1 is:",var1);
// console.log("var2 is:",var2);


//  2
// const myVar = ["item1", "item2"];
// let[var1, var2] = myVar;
// console.log("var1 is:",var1);
//  console.log("var2 is:",var2);


// 3
// const myVar = ["item1", "item2","item3","item4"];
// let[var1, var2] = myVar;
// console.log("var1 is:",var1);
// console.log("var2 is:",var2);



// 4 
// const myVar = ["item1", "item2","item3","item4"];
// let[var1, ,var2] = myVar; // skipping 1 element in bw
// console.log("var1 is:",var1);
// console.log("var2 is:",var2);



// 5
const myVar = ["item1", "item2","item3","item4"];
let[var1, ,var2] = myVar; 
let newArray = myVar.slice(2); // slice 2 ke baaad saare
console.log("var1 is:",var1);
console.log("var2 is:",var2);
console.log("newarray is:",newArray);

