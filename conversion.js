        // 1) method----------------
        let str1= "Hello"
        let str2= "Rits"
        let str3= str1+str2
        console.log(str3)  //HelloRits


        // 2) method----------------

        // simple thing is that if string is there then it does not add anymore it can write simpally in combine order

        console.log("1" + 2)
        console.log(1 + "2")
        console.log("1" + 2 + 2 )    // agr shuru m hi string hai to ese hi likha jayga combine krke not add 
        console.log(1 + 2 + "2" )    // in starting number then first its add and then string to normal likha jayega combine krke
        
          // 3) method
        console.log(true) //string
        console.log(+true) // by using + operator in starting it makes number 
        console.log(+"")


        // ------convert number to string------
        // 1) method-1
        let age=22;
        console.log(typeof age);  // number
        age = String(age);
        console.log(typeof age); // string

        // // 2) method-2
        let age1 = 22;
        console.log(typeof age1); //number
        age1 = age1 + "";
        console.log(typeof age1); //string

        // ------convert string to number------
        // 1) method-1
        let str = "34";
        console.log(typeof str);  // string
        str = Number(str);
        console.log(typeof str);  //number
        
        // 2) method-2
        let myStr = "34";
        console.log(typeof myStr);  // string
        myStr = +myStr;
        console.log(typeof myStr); //number
        

        