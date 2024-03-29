// 17: Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.



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
guestarray.unshift("Masood")
console.log(guestarray);

let middleGuest:string = "Sonia"
let middleIndex = guestarray.length/2;
guestarray.splice(middleIndex,0,middleGuest)
// console.log(guestarray);

guestarray.push("Aliya")
// console.log(guestarray);
 console.log("I am inviting only two person in dinner")
while(guestarray.length>2){let removeguest =
    guestarray.pop();
    console.log(`\nSorry ${removeguest} I can invite only two persorn for dinner`);
}
guestarray.map((item)=> console.log(`\n${item}, You are still invited to dinner`))

guestarray.pop();
guestarray.pop();
console.log(guestarray);