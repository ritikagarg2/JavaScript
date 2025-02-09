// 1-----create object
// const person = {
//     name:"ritika",
//     age: 21
// };
// console.log(person);
// console.log(typeof person);


// 2-----data access from object
// const person = {
//     name: "rits",
//     age: 21,
//     hobbies: ["playing","badminton","listening music"]
// };
// console.log(person.name);
// console.log(person.hobbies); //dot notation
// console.log(person["name"]); // bracket notation


// 3---- add key value pair
// const person = {
//     name: "rits",
//     age: 21,
//     hobbies: ["playing","badminton","listening music"]
// };
// console.log(person);
// person.gender = "female";
// console.log(person);



// difference bw dot & bracket notation
// const person = {
//     name:"rits",
//     age:21,
//     "person hobbies": ["playing","badminton","art"] // cannot separate using dot
// };
// console.log(person["person hobbies"]); // cannot acces by dot so use bracket



// const key = "email";
// const person = {
//          name:"rits",
//          age:21,
//          "person hobbies": ["playing","badminton","art"] // cannot separate using dot
//      };
//      person[key] = "ritika@gmail.com";
//      console.log(person);




 const person = {
    name:"rits",
     age:21,
     "person hobbies": ["playing","badminton","art"] // cannot separate using dot
 };

// iterate obj
// for(let key in person) {
    
//           console.log(key);
//          console.log(person[key]);
 //    }


for (const key in person) {
       console.log(`${key} : ${person[key]}`);        
    }


