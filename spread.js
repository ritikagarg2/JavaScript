// const array1 = [1,2,3,4];
// const array2 = [6,7,8,9];

// const newArray = [...array1, ...array2];
// const newArray = [...array1, ...array2, 43,78]; 
// const newArray = [..."1256789"];
// console.log(newArray);


// spread in object
// 1
// const obj = {
//     key1 : "value1",
//     key2 : "value2",
//     key1 : "value4"
// };
// console.log(obj); // key1 = value4 takes because its near


// 2 
// const obj1 = {
//    key1: "value1",
//    key2: "value2"
// };

// const obj2 = {
//     key3: "value3",
//     key4: "value4"
// }

// const newArray = {...obj1, ...obj2};
// console.log(newArray);



// 3
const obj1 = {
    key1: "value1",
    key2: "value2"
 };
 
 const obj2 = {
    key1: "value11",
     key3: "value3",
     key4: "value4"
 }
 
//  const newObject = {...obj1, ...obj2};
//   const newObject = {...obj2, ...obj1};
const newObject = {...["item1","item2"] }

 console.log(newObject);




