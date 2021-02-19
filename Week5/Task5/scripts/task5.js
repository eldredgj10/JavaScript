/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
var current = new Date();
// Step 2: Declare another variable to hold the day of the week
var dayOfTheWeek;
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfTheWeek = currentDate.getDay();
// Step 4: Declare a variable to hold a message that will be displayed
var message = '';
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if ((dayOfTheWeek > 0) && (dayOfTheWeek < 6))
{
    message = "Hang in there!";
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    message = "Woohoo! It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
var secondMessage = '';
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfTheWeek) {
    case 0:
        secondMessage = 'Sunday';
        break;
    case 1:
        secondMessage = 'Monday';
        break;
    case 2:
        secondMessage = 'Tuesday';
        break;
    case 3:
        secondMessage = 'Wednesday';
        break;
    case 4:
        secondMessage = 'Thursday';
        break;
    case 5:
        secondMessage = 'Friday';
        break;
    case 6:
        secondMessage = 'Saturday';
        break;
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').innerHTML = message;
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').innerHTML = secondMessage;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
var templeList = [];
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
function output(list)
{
    templeList.forEach(element => {
        const html = `<article> <h3>${element.templeName}</h3> <h4>${element.location}</h4> <h4>${element.dedicated}</h4> <img src = "${element.imageUrl}"> </article>`;
        document.querySelector('#temples').innerHTML += html;
        
    });
}

function compare(a, b) {
    if (a < b) {
        return;
    }
    if (a > b) {
        temp = b;
        b = a;
        a = temp;
      return a, b;
    }
    // a must be equal to b
    return 0;
}
  
// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
const url = 'https://byui-cse.github.io/cse121b-course/week05/temples.json';
fetch(url)
    .then((response) => {
    if (response.ok) {
        return response.json();
    }
    else {
        console.log(error);
    }
})
    .then((response) => {
        templeList = response;
        output(templeList);
    });
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples
// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset()
{
    //old code that sort of worked but added an empty article to the html.
    /*templeList.forEach(element => {
        const html = `<article> </article>`;
        document.querySelector('#temples').innerHTML = html;
    });*/
    document.querySelector('#temples').innerHTML = '';
}
// Step 9: Declare a function named sortBy that does the following:
function sortBy()
{
    var selection = document.getElementById('sortBy').value;
    if (selection == "templeNameDescending") {
        templeListSorted = templeList.reverse();
    }
    else {
        templeListSorted = templeList.sort();
    }
    reset();
    output(templeListSorted);
}
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
const select = document.querySelector('#sortBy');
select.addEventListener('click', sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
