// Q9. Initialize an array with color names. Display the array elements in your browser.
let colorArray = ['red','green','blue'];
document.write(`<br><b>Q9.</b>`);
document.write(`<br>Colors: [${colorArray}]`);

// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
let userAddition1 = prompt('Enter color you want to add in the beginning: ');
colorArray.unshift(userAddition1);
document.write(`<br>Colors after addition-1: [${colorArray}]`);

// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array.
let userAddition2 = prompt('Enter color you want to add in the end: ');
colorArray.push(userAddition2);
document.write(`<br>Colors after addition-2: [${colorArray}]`);

// c. Add two more color to the beginning of the array.
colorArray.unshift('purple','pink');
document.write(`<br>Colors after addition-3: [${colorArray}]`);

// d. Delete the first color in the array.
colorArray.shift()
document.write(`<br>Colors after deleting first: [${colorArray}]`);

// e. Delete the last color in the array.
colorArray.pop()
document.write(`<br>Colors after deleting last: [${colorArray}]`);

// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index.
let userAddition6 = prompt('Enter color you want to add: ');
let userIndexAddition6 =  prompt('At what index you want to add a color: ');
colorArray.splice(userIndexAddition6,0,userAddition6);
document.write(`<br>Colors after addition at index: [${colorArray}]`);

// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete.
let deleteQty = prompt('How many colors to delete: ');
let deleteIndex =  prompt('At what index you want to delete: ');
colorArray.splice(deleteIndex,deleteQty);
document.write(`<br>Colors after deleting at index: [${colorArray}]`);


