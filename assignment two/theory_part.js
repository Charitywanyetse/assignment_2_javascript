   //  QUESTION 9

   // Write a program that demonstrates the difference between null, undefined and an empty string
      
     let nullvalue = null;
     let undefinedvalue ;
     let emptystring = "";
      // checking the values 
      console.log("Null value:",nullvalue   );
      console.log("undefined value:", undefinedvalue  ); 
      console.log("Empty string:",emptystring  );

      // check the type

      console.log("Type of null value:", typeof nullvalue)



      // QUESTION 10 

      // dECLARE A VARIABLE USING CONST AND TRY TO REASSIGN IT .
      // WHAT HAPPENS ? EXPLAIN YOUR ANSWER IN A COMMENT

      // Declare a variable using const

      const MY_VARIABLE = 10

      //Try to assign it 

      MY_VARIABLE = 20;

      //assign to constant variable

      // explanation 

      // when you declare a variable using const , you can not assign it .
     // The variable becomes a constant , any attempt to reassign it will result in a type error
      // This is because const variables are immutable by design  meaning they can not be
      //  changed once they are created.
      

//    QUESTION 11 


//  Write a function that checks if the given variable is an object an not a null .

let myobject = { name:"charity", age:21};
let mynull = null;
let mystring = "hello";
console.log(isobject (myobject));
console.log(isobject (mynull));
console.log(isobject (mystring));



// QUESTION 12 BONUS QUESTION



















