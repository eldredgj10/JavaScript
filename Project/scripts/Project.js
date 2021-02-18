//Author: Jeanette Eldredge
var allData = [];
var male = [];
var female = [];
var last = [];
function organize(list)
{
    allData.forEach(element => {
        male.push(element.maleName);
        female.push(element.femaleName);
        last.push(element.lastName);
    });
    
}

const url = 'https://raw.githubusercontent.com/eldredgj10/JavaScript/master/Project/api/names.json';
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
        allData = response;
        organize(allData);
    });

function reset()
{
    document.querySelector('#names').innerHTML = '';
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function generate()
{
    var selection = document.getElementById('sortBy').value;
    let name = '';
    let generateNum = 0;
    if (selection == "maleName") {
        generateNum = getRandomInt(male.length)
        name = male[generateNum];
        male.splice(generateNum, 1);
    }
    else if (selection == "femaleName")
    {
        generateNum = getRandomInt(female.length)
        name = female[generateNum];
        female.splice(generateNum, 1);
    }
    else {
        generateNum = getRandomInt(last.length)
        name = last[generateNum];
        last.splice(generateNum, 1);
    }
    reset();
    output(name);
}

function output(name)
{
    const html = `<h3>${name}</h3>`;
    document.querySelector('#names').innerHTML = html;
}

const button = document.querySelector('#Generate');
button.addEventListener('click', generate)
