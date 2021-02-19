
import { qs, alertMessage } from './utility.js';
function buttonClicked()
{
    const input = document.querySelector('#inputElement');
    const output = document.querySelector('#output');
    console.log(input.value);
    output.innerText = input.value;
}

const button = document.querySelector('#SubmitButton');
button.addEventListener('click', buttonClicked);


//Other way to complete display before click button is called.
// window.addEventListener('load', function () {
//     const button = document.querySelector('#submitButton');
//     button.addEventListener('click', buttonClicked);
// })

let myArray = [1,2,3];
console.log(myArray);

myArray.push(4);
console.log(myArray);

myArray.pop();
console.log(myArray);

function loop(value, index)
{
    console.log('value: ', value);
    console.log('index: ', index)
}

myArray.forEach(loop)

//Another way to loop through an array
myArray.forEach(function(value, index) {
    console.log('value: ', value);
    console.log('index: ', index)
})

const items = ['one','two', 'three'];
const itemsHtml = items.map(function(value){
    return "<li>" + value + "</li>";
})
const itemsHtml2 = items.map((value) => "<li>" + value + "</li>");

console.log(items);
console.log(itemsHtml);

const grades = ['A','B', 'C'];

//Comparing is 3 equal signs. 
function calculateGpaValues(grade){
    grade = grade.toUpperCase();
    if(grade=== 'A')
    {
        return 4;
    }
    else if (grade === 'B')
    {
        return 3;
    }
    else if  (grade === 'C')
    {
        return 2;
    }
}

const gpaValues = grades.map(calculateGpaValues)
console.log(gpaValues);

const gpaTotal = gpaValues.reduce(function (total, value) {
    return total + value;
});
const gpaTotal2 = gpaValues.reduce((total, value) => total + value);
console.log(gpaTotal / gpaValues.length);


const words = ['Watermelon, Cherries, popcorn, peach,'];
const shortWords = words.filter(function(word) {
    return word.length < 6;
});

alertMessage("I'm from the module!");