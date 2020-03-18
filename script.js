function getInfo() {
    var APIkey = "aa448693cc6b5b40967cafecafdd7c15"
    var city = $("#city").val().trim();
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        var result = response
        console.log(result);

        var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIkey + "&lat=" + result.coord.lat + "&lon=" + result.coord.lon;
    
      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
      });

      });
    
      var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;

      $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {
        console.log(response);
      });

     
}

$("#button").on("click", function(event) {
    event.preventDefault();
    getInfo()
   
    })
    

    