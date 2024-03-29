"use strict";
// 42: Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log((magician.charAt(0).toUpperCase() + magician.slice(1)));
    }
}
function make_great(magician) {
    for (let i = 0; i < magician.length; i++) { //i stand for index of string
        magician[i] = magician[i] + ' the great';
    }
}
const magician2 = ["ali", "sonia", "roha"];
make_great(magician2);
show_magicians(magician2);
