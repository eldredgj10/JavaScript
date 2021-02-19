/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
var myname = "Jeanette Eldredge";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = myname;

// Step 3: declare and instantiate a variable to hold the current year
var years = 2021;

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = years;

// Step 5: declare and instantiate a variable to hold the name of your picture
var mypicture = "image/mypic.jpg";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#mainImage').setAttribute('src', 'images/mypic.jpg');


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
var foods = ['Salmon', 'Rolls', 'Peaches', 'Peas'];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = foods;

// Step 3: declare and instantiate a variable to hold another favorite food
var newfood = 'Cherries';

// Step 4: add the variable holding another favorite food to the favorite food array
foods.push(newfood);

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = foods;

// Step 6: remove the first element in the favorite foods array
foods.pop(0);

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = foods;

// Step 8: remove the last element in the favorite foods array
foods.pop();

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = foods;
