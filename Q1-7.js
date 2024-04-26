// Q1. Declare an empty array using JS literal notation to store student names in future.
let array1 = [];

// Q2. Declare an empty array using JS object notation to store student names in future.
let array2 = [];

// Q3. Declare and initialize a strings array.
let strArray = ['python', 'javascript', 'typescript'];

// Q4. Declare and initialize a numbers array.
let numArray = [100, 200, 300];

// Q5. Declare and initialize a booleans array.
let booleanArray = [true, false];

// Q6. Declare and initialize a mixed array.
let mixedArray = ['python', 'javascript', 100, 200, true, false];

// Q7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser
document.write(`<br><br><br> <b>Q.07</b> <br>`);
let qualArray = ['SSC', 'HSC', 'BCS', 'BS', 'BCOM', 'MS', 'M. Phil.', 'PhD'];
document.write(' Qualifications:  <br><br>')
for (let q of qualArray) {
    document.write(`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ${qualArray.indexOf(q) + 1}) ${q}<br>`);
}
