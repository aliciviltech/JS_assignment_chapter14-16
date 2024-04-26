// Q10.Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.
let studentScore = [230,340,120,400];
document.write(`<br><br><b>Q10.</b>`);
document.write(`<br> students Score: [${studentScore}]`);
studentScore.sort();
document.write(`<br> students Sorted Score: [${studentScore}]`);

// Q11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
let cityArray = ['lahore','karachi','islamabad','peshawar','queta'];
let selectedCities = [];
selectedCities[0] = cityArray[2]; 
selectedCities[1] = cityArray[3]; 
selectedCities[2] = cityArray[4];
document.write(`<br><br><b>Q11.</b>`);
document.write(`<br> cities: [${cityArray}] <br> selected cities: [${selectedCities}]`); 

// Q.12. Write a program to create a single string from the below mentioned array: 
let arr = ["This", "is", "my", "cat"];
let joinedString = arr.join()
document.write(`<br><br><b>Q12.</b>`);
document.write(`<br> Joined array elements (using join mehtod): ${joinedString}`);


// Q13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)
let newArrayStore = [];
newArrayStore.push('karachi');
newArrayStore.push('Lahore');
newArrayStore.push('Queta');

newArrayStore.shift();
newArrayStore.shift();
newArrayStore.shift();

// Q14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In-First Out)
let newArrayStore2 = [];
newArrayStore.unshift('karachi');
newArrayStore.unshift('Lahore');
newArrayStore.unshift('Queta');

newArrayStore.shift();
newArrayStore.shift();
newArrayStore.shift();

// Q15.Write a program to store phone manufacturers (Apple,Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the dropdown/select menu in your browser using document.write() method:
let phoneArray = ['apple','samsung','nokia','sony'];
document.write(`<br><br><b>Q15.</b>`);
document.write(`<br> phoneArray: [${phoneArray}] <br>`); 

document.write('<select>');
for(let phone of phoneArray){
    document.write(` <option>${phone}</option>`);
}
document.write('</select>');
