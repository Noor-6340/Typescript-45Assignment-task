// 16 :More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.

// name array
let guestarray:string[] =["Shumaila", "Ayesha","Shagufta"];

//  can not attend dinner
let canNotAttend:string ="Shagufta"
// console.log(canNotAttend + ' ' +"can not make it, for dinner" )

//  invite new guest
let newGuest: string = "Muntaha"
guestarray[guestarray.indexOf(canNotAttend)] = newGuest
// console.log(guestarray)
// console.log("Welcome all we found a biigger dinner table")
guestarray.unshift("Abrish")
console.log(guestarray);

let middleGuest:string = "Sonia"
let middleIndex = guestarray.length/2;
guestarray.splice(middleIndex,0,middleGuest)
// console.log(guestarray);

guestarray.push("Aliya")
// console.log(guestarray);

guestarray.map((item)=> console.log(`\nDear ${item} You are invited to dinner`) )