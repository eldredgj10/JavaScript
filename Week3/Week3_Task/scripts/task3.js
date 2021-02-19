/* Lesson 3 */
// Information and help from: https://developer.mozilla.org/ and https://www.w3schools.com/

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2)
{
    let sum = parseFloat(number1) + parseFloat(number2);
    return sum;
}
// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers()
{
    let num1 = document.querySelector('#addend1').value;
    let num2 = document.querySelector('#addend2').value;
    let sum = add(num1, num2);
    return sum;
}
// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
function buttonClicked1()
{
    let sum = addNumbers();
    console.log(sum);
    document.querySelector('#sum').value = sum;
}

const button1 = document.querySelector('#addNumbers');
button1.addEventListener('click', buttonClicked1);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

var subtract = function (number1, number2) {
    let minus = parseFloat(number1) - parseFloat(number2);
    return minus;
}

var subtractNumbers = function () {
    let num1 = document.querySelector('#minuend').value;
    let num2 = document.querySelector('#subtrahend').value;
    let subtracting = subtract(num1, num2);
    return subtracting; 
}

var buttonClicked2 = function () {
    let answer = subtractNumbers();
    console.log(answer);
    document.querySelector('#difference').value = answer;
}

const button2 = document.querySelector('#subtractNumbers');
button2.addEventListener('click', buttonClicked2);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

const multiply = (number1, number2) => parseFloat(number1) * parseFloat(number2);

const multiplyNumbers = () => {
    let num1 = document.querySelector('#factor1').value;
    let num2 = document.querySelector('#factor2').value;
    let times = multiply(num1, num2);
    return times;
}

const buttonClicked3 = () => {
    let answer = multiplyNumbers();
    console.log(answer);
    document.querySelector('#product').value = answer;
}

const button3 = document.querySelector('#multiplyNumbers');
button3.addEventListener('click', buttonClicked3);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(number1, number2)
{
    let divided = parseFloat(number1) / parseFloat(number2);
    return divided;
}

function divideNumbers()
{
    let num1 = document.querySelector('#dividend').value;
    let num2 = document.querySelector('#divisor').value;
    let fraction = divide(num1, num2);
    return fraction;
}
function buttonClicked4()
{
    let answer = divideNumbers();
    console.log(answer);
    document.querySelector('#quotient').value = answer;
}

const button4 = document.querySelector('#divideNumbers');
button4.addEventListener('click', buttonClicked4);
// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const todayDate = new Date('Jan 30, 2021')
// Step 2: Declare a variable to hold the current year
var year = 0;
// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
year = todayDate.getFullYear();
// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').innerHTML = year;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
var sourceArray = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25']

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').innerHTML = sourceArray;
// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

function odd(number) {
    let oddNum = number % 2;
    if (oddNum != 0)
    {
        return number;
    }
}
var oddArray = sourceArray.filter(odd);
document.getElementById("odds").innerHTML = oddArray;
// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
function even(number) {
    let evenNum = number % 2;
    if (evenNum == 0)
    {
        return number;
    }
}
var evenArray = sourceArray.filter(even);
document.getElementById("evens").innerHTML = evenArray;
// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const adding = (accumulator, currentValue) => parseInt(accumulator) + parseInt(currentValue);
document.getElementById("sumOfArray").innerHTML = sourceArray.reduce(adding);
// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const mapArray = sourceArray.map(x => x * 2);
document.getElementById("multiplied").innerHTML = mapArray;
// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
document.getElementById("sumOfMultiplied").innerHTML = mapArray.reduce(adding);