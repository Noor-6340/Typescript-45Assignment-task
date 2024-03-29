"use strict";
// 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array.
let name1 = "Shumaila";
let name2 = "Shumaila Jabeen";
let name3 = "Shumaila Jabeen Noor";
if (name1 == name3) {
    console.log("names are equal");
}
else {
    console.log("name are not equal");
}
if (name1 != name2) {
    console.log("names are equal");
}
if (name1 != name3) {
    console.log("names are equal");
}
let age1 = 20;
let age2 = 27;
if (age1 == 20) {
    console.log("eligible for vote");
}
if (age1 != 27) {
    console.log("eligible for vote in older categary");
}
if (age1 <= age2) { //less than
    console.log("younger");
}
if (age2 >= age1) { //Greater than
    console.log("older");
}
if (age1 == 20 && age2 == 27) {
    console.log("person is eligible for  vote");
}
if (age1 == 20 || age2 != 27) {
    console.log("person is not eligible for  vote");
}
let country = ["Pakistan", "Turkey", "Dubai", "Qatar", "SouthAfrica"];
if (country.includes("Pakistan")) {
    console.log("Pakistan is in the country list");
}
if (!country.includes("America")) {
    console.log("America is not include in an array");
}
