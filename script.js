$("#button").on("click" , function() {
    var APIkey = "aa448693cc6b5b40967cafecafdd7c15"
    var city = $("#city").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
      });
    
})