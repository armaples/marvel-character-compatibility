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
                    limit: 10,
                },
                success: function (data) {
                    console.log(data)
                    response($.map(data.data.results, function(item) {
                        for (let i = 0; i < 10; i++) {
                            console.log(data.data.results[i].name)
                            return data.data.results[i].name
                        }
                    }))
                }
            })
        }
    });
});
        
        
            
                
                
                    
                    
                            
                            



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
        .catch(err => console.error(err))