
var time = ("HH:mm:ss");
    var dateFormat = moment().format("L");
    

function getInfo() {
  var APIkey = "aa448693cc6b5b40967cafecafdd7c15"
  var city = $("#city").val().trim();
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIkey;

  $.ajax({
    url: queryURL,
    method: "GET"
    // localStorage.setItem("cities" , JSON.stringify(savedCities))
  })
    .then(function (response) {
      var result = response
      console.log(result);
      console.log(result.name)
      console.log(result.main.temp)
      
      let tempF = (result.main.temp - 273.15) * 1.80 + 32;
      tempF = Math.floor(tempF);

      var cityName = $("<h4>").addClass("card-title").text(result.name + " (" + dateFormat + ")")
      var temperature = $("<p>").addClass("card-text current-temp").text("Temperature: " + tempF + " °F");
      var humidity = $("<p>").addClass("card-text current-humidity").text("Humidity: " + response.main.humidity + "%")
      var wind = $("<p>").addClass("card-text current-wind").text("Wind Speed: " + response.wind.speed + " MPH");
      var wIcon = $("<img>").attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

      $("#card-body").append(cityName);
      $("#card-body").append(wIcon);
      $("#card-body").append(temperature);
      $("#card-body").append(humidity);
      $("#card-body").append(wind);
      


      
    

      var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=" + APIkey + "&lat=" + result.coord.lat + "&lon=" + result.coord.lon;
      
      $.ajax({
        url: queryURL,
        method: "GET"
      })
        .then(function (response) {
          console.log(response);
          var uvIndex = response
          console.log(uvIndex.value)

          

          

          var uv = $("<p>").addClass("card-text uv-index").text("UV Index: " + uvIndex.value);
          
        $("#card-body").append(uv)
        });

       

    });

  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIkey;

  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response);
      
        
      
        

    });


}

$("#button").on("click", function (event) {
  event.preventDefault();
  getInfo();
  var li = $("#city").val().trim();
  var button = $("<button>")
  button.append(li)
  
  $("#previous-searches").append(button)
  $("#city").val("");
  


})


