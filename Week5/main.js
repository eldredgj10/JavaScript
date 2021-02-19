const url = 'https://pokeapi.co/api/v2/pokemon/ditto';
const results = fetch(url);
console.log(results);


function convertToJson(response) {
    return response.json;
}
const results = fetch(url).then(convertToJson).then(function (data) {
    console.log("first:", data);
});
console.log('Second:', results);