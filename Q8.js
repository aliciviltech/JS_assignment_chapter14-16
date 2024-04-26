// Q8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like: (Score of ali is 320. Percentage is 64%);

let stArr = ['ali','saqib','shahid'];
let scoreArr = [490,354,420];
let totalScore = 500;
document.write(`<br><br><br> <b>Q.08</b> <br>`);
for(let i=0; i<stArr.length; i++){
    document.write(`&nbsp;&nbsp;&nbsp;&nbsp;Score of ${stArr[i]} is ${scoreArr[i]}. Percentage is ${scoreArr[i]*100/totalScore}% <br>`);
}
