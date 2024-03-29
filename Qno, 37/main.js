"use strict";
// 37: Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size = "L", message = "I love Typescript!") {
    console.log(`I am making a ${size} T-shirt with th message "${message}" .`);
}
make_shirt("Large", "");
make_shirt("Medium");
make_shirt("small", "I am programmer");
