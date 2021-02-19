/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
const yourself = {
    name: "Jeanette Eldredge",
    photo: "images/mypic.jpg",
    favoriteFoods: ["Cherries", 'Peaches', 'Salmon', 'Rolls', 'Strawberries', 'Cosmic Crisps'],
    hobbies: ['Singing', 'Writing', 'Acting', 'Dancing', 'Working with Computers', 'Hanging out with friends'],
    placesLived: [
        {
            place: 'Provo, Utah',
            length: '6 months'
        },
        {
            place: 'West Jordan, Utah',
            length: '18 years'
        },
        {
            place: 'Rexburg, Idaho',
            length: '2 1/2 years'
        }
    ]
    
}
// Step 2: Inside of the object, add a property named name with a value of your name as a string

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings

// Step 6: Add another property named placesLived with a value of an empty array

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string

// Step 8: For each property, add appropriate values as strings

// Step 9: Add additional objects with the same properties for each place you've lived


/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = yourself.name;
// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('src', yourself.photo);
// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', yourself.name);
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
yourself.favoriteFoods.forEach(element => {
    const html = `<li>${element}</li>`;
    document.querySelector('#favorite-foods').innerHTML += html;
});
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods

// Step 6: Repeat Step 4 for each hobby in the hobbies property
yourself.hobbies.forEach(element => {
    const html = `<li>${element}</li>`;
    document.querySelector('#hobbies').innerHTML += html;
    
});
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
yourself.placesLived.forEach(element => {
    const html = `<dt>${element.place}</dt> <dd>${element.length}</dd>`;
    document.querySelector('#places-lived').innerHTML += html;
    
});