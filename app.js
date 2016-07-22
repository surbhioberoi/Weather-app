var units = 'metric';

function getWeather() {
  
  function processOutput(position) { 
    
    function showWeather(data) {        
      console.log(data);
      $("#tempBox").html(data.main.temp);        
      $("#description").html(data.weather[0].description);
      $("#location").html(data.name);
      if (data.clouds.all >= 40) {
        $("#iconBox").addClass('fa fa-cloud');
      } else {
        $("#iconBox").addClass('fa fa-sun-o');
      }
      
    }
    
    $.ajax({
            'url': 'http://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=a9297cfb65851da6db137a7cf13e8cc0&units=' + units,
            'success': showWeather
  });
}

navigator.geolocation.getCurrentPosition(processOutput);
}

getWeather();

function changeUnit() {
  if (units === 'metric') {
    units = 'imperial';
    $("#switchUnit").html("Show in Celsius");
  } else {
    units = 'metric';
    $("#switchUnit").html("Show in Fahrenheit");
  }
  getWeather();
}
  
  
