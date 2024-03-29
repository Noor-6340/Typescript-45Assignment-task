"use strict";
// 32: Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
let current_users = ["Shumaila", "ayesha", "yumna", "Muntaha", "Sonia"];
let new_users = ["Noor", "MUNTAHA", "Jabeen", "YUMNA"];
let current_users_lower = current_users.map(users => users.toLowerCase());
for (let new_user of new_users) {
    let isAvailabe = true;
    for (let current_user of current_users) {
        if (new_user.toLowerCase() === current_user.toLowerCase()) {
            console.log(`username "${new_user} is already taken. please choose a different username`);
            isAvailabe = false;
            break;
        }
    }
    if (isAvailabe) {
        console.log(`username "${new_user} is available.`);
    }
}
