/*function add(a,b){
    return a+b;
}
add()
module.exports=add; 


export default function add(a,b){
    return a+b;
}*/

// callback.js

// Callback function
function myCallback(message) {
    console.log("Callback says:", message);
}

// Main function that accepts a callback
function mainFunction(callback) {
    console.log("Main function is running...");
    
    // Simulate async operation using setTimeout
    setTimeout(() => {
        callback("Task completed!");
    }, 2000); // waits 2 seconds
}

// Call the main function and pass the callback
mainFunction(myCallback);
