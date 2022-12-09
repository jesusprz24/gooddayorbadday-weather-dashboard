console.log('Inside script.js');
var city="";
var searchCity = $("#search-city");
// var searchButton = $("#search-button");
var searchButton = document.getElementById('search-button');
var clearButton = $("#clear-history");
var currentCity = $("#current-city");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];


function find(c){
    for (var i=0; i<sCity.length; i++){
        if(c.toUpperCase()===sCity[i]){
            return -1;
        }
    }
    return 1;
}

//API key?
var APIKey = "2413e37227e2ad900941674ac5d041df";

//Displays the current weather and future weather when choosing the correct location
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

//AJAX key here

function retrieveCurrentWeather(currentCity) {
    console.log(`The city searched for is ${currentCity}.`);
    var geocodeUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${currentCity}&limit=1&appid=${APIKey}`;
    let lat;
    let long; 
    fetch(geocodeUrl)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log('The gecode fetch result is', data);
        // grab the lat/long from the data object and use it in the anext fetch
        // The next fetch will use the ohter endpoint from OpenWeather
        // lat = data[0]['lat'];
        // long = data[0]['lon'];
        // now you pass lat and long in the next fetch
    })
}

function beginSearch() {
    console.log('You clicked the search button');
    var userInput = searchCity.val();
    console.log(userInput);
    if(!userInput) {
        alert('Please enter a city to search.');
    } else {
        retrieveCurrentWeather(userInput);
    }
}

searchButton.addEventListener('click', beginSearch);



/*
We want to capture the user's input and store it in a variable.
We will use the variable in our query to OpenWeather's API, i.e. include it as a parameter value
Once the query is sent, we want to analyze and uderstand the information we retrieved
Once we understand the format and content of the information, we will call a function
to do something (i.e. embed that information in our HTML page) with the retrieved information.
*/
