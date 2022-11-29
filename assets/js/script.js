// Create array of all Marvel Characters
var marvelCharacters = [];

// Gets names 
$(document).ready(function() {

    var requestUrl = "https://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56";
        console.log(requestUrl);

    // Create autocomplete function for input field
    $("#userInput").autocomplete({
        // User must type at least one character for autocomplete to show up
        minLength: 1,
        
        source: function(request, response, url){
            $.ajax({
                url: requestUrl,
                dataType: "json",
                data: {
                    nameStartsWith: request.term,
                    // Only a maximum of 5 names will show
                    limit: 5,
                },
                success: function (data) {
                    console.log(data)
                    response($.map(data.data.results, function(array, index) {
                            var autoName = data.data.results[index].name;
                            console.log(autoName);
                            return autoName;
                    }))
                }
            })
        }
    });
});                 

var resultContainer = document.getElementById('result');
var searchLoveButton = document.getElementById('love-button');

// this entire function is the Love Calc API 
function runLove() {
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f9b246568msh4ee8442f843029bp1700a9jsn24b94ab24d66',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    marvChar = document.getElementById('userInput').value
    userName = document.getElementById('nameInput').value
    var apiUrl = "https://love-calculator.p.rapidapi.com/getPercentage?" + "sname=" + userName + "&fname=" + marvChar;
    fetch(apiUrl, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            
                console.log("are you working?????????")
            // takes the data and creates HTML p's for each one
            var loveFName = document.createElement('p');
            var lovePercent = document.createElement('p');
            var loveRes = document.createElement('p');
            var loveSName = document.createElement('p');
            // adds flavor text
            loveFName.textContent = data.fname + " +";
            lovePercent.textContent = data.percentage + "% compatible! ";
            loveRes.textContent = data.result;
            loveSName.textContent = data.sname + " are";
            // actually adds on those p's
            resultContainer.appendChild(loveFName);
            resultContainer.appendChild(loveSName);
            resultContainer.appendChild(lovePercent);
            resultContainer.appendChild(loveRes);
            // stores results in LocalStorage
            localStorage.setItem('firstName', loveFName.textContent);
            localStorage.setItem('secondName', loveSName.textContent);
            localStorage.setItem('lovePercent', lovePercent.textContent);
            localStorage.setItem('loveRes', loveRes.textContent);
})};


// clears the prior results, if any 
function clearResults() {
    console.log('CLEAR-RESULTS');
    var resClear = document.getElementById('result')
    resClear.textContent = "";

}

searchLoveButton.addEventListener('click', clearResults);
searchLoveButton.addEventListener('click', runLove); 