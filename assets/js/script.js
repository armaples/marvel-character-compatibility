// Create array of all Marvel Characters
var marvelCharacters = [];
var requestUrl0 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=0';
var requestUrl1 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=100';
var requestUrl2 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=200';
var requestUrl3 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=300';
var requestUrl4 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=400';
var requestUrl5 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=500';
var requestUrl6 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=600';
var requestUrl7 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=700';
var requestUrl8 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=800';
var requestUrl9 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=900';
var requestUrl10 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1000';
var requestUrl11 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1100';
var requestUrl12 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1200';
var requestUrl13 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1300';
var requestUrl14 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1400';
var requestUrl15 = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56&limit=100&offset=1500';

// Gets names 
$(document).ready(function() {
    fetch(requestUrl0)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl1)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl2)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl3)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl4)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl5)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl6)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl7)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl8)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl9)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl10)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl11)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl12)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl13)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl14)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl15)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })

    fetch(requestUrl16)
    .then(function (response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        };
    })
});

// Create autocomplete function for input field
function autoComplete() {
    // define variable
    // add event listener for input
    // create div element to contain items
    // for loop 
}
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f9b246568msh4ee8442f843029bp1700a9jsn24b94ab24d66',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    marvChar = "jimmy"
    userName = "jackson"
    var apiUrl = "https://love-calculator.p.rapidapi.com/getPercentage?" + "sname=" + marvChar + "&fname=" + userName;
    fetch(apiUrl, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
