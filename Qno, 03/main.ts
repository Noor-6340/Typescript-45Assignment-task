//3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let firstName: string = "masood zaman";

//uppercase
console.log(firstName.toLocaleUpperCase());

//lowercase
console.log(firstName.toLowerCase());

//title case
console.log(firstName.charAt(0).toLocaleUpperCase() 
+ firstName.slice(1))