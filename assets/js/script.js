// Create array of all Marvel Characters
var marvelCharacters = [];

// Gets names 
$(document).ready(function() {

    var requestUrl = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=f28e122cf392b150e1e8bf5ca2a62842&hash=3abdba83f20f29cc7e578a0e44005e56";
        console.log(requestUrl);

    // Create autocomplete function for input field
    $("#userInput").autocomplete({
        minLength: 1,
        
        source: function(request, response, url){
            $.ajax({
                url: requestUrl,
                dataType: "json",
                data: {
                    nameStartsWith: request.term,
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
 
function runLove() {
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '0f9b246568msh4ee8442f843029bp1700a9jsn24b94ab24d66',
            'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
        }
    };
    marvChar = 'jerry'
    userName = "jackson"
    var apiUrl = "https://love-calculator.p.rapidapi.com/getPercentage?" + "sname=" + userName + "&fname=" + marvChar;
    fetch(apiUrl, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            
                console.log("are you working?????????")
            var loveFName = document.createElement('p');
            var lovePercent = document.createElement('p');
            var loveRes = document.createElement('p');
            var loveSName = document.createElement('p');
            loveFName.textContent = data.fname;
            lovePercent.textContent = data.percentage;
            loveRes.textContent = data.result;
            loveSName.textContent = data.sname;
            resultContainer.appendChild(loveFName);
            resultContainer.appendChild(lovePercent);
            resultContainer.appendChild(loveRes);
            resultContainer.appendChild(loveSName);
        })};
searchLoveButton.addEventListener('click', runLove); 


// .then(response => response.json())
// .then(response => console.log(response))
// .catch(err => console.error(err))
