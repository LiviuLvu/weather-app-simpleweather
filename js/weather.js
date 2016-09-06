if ('geolocation' in navigator) {
   navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude + ',' + position.coords.longitude);
   });
} else {
   // default to Timisoara location if no geodata is available
   loadWeather(45.753935299999995 + ',' + 21.223871700000004);
}
$(document).ready(function() {
   loadWeather();
});
// display weather based on geolocation data
function loadWeather(location, woeid) {
   $.simpleWeather({
      location: location,
      woeid: woeid,
      unit: 'c',
      success: function(weather) {
         city = weather.city;
         temp = weather.temp + '&deg;';
         wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
         wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
         humidity = weather.humidity + ' %';
         $('.location').text(city);
         $('.temperature').html(temp);
         $('.climate-bg').html(wcode);
         $('.windspeed').html(wind);
         $('.humidity').html(humidity);
      }
      // the error property placed here caused the message to always appear after page load, with delay
   });
}
function loadWeatherOnSearch(location, woeid) {
   // store data from input field
   var cityNameSearch = $('.cityNameSearch').val();
   // if (cityNameSearch) {
   //    location = cityNameSearch;
   // }   
   $.simpleWeather({
      location: cityNameSearch,
      woeid: woeid,
      unit: 'c',
      success: function(weather) {
         $('.error').html('<p></p>');
         city = weather.city;
         temp = weather.temp + '&deg;';
         wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
         wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
         humidity = weather.humidity + ' %';
         $('.location').text(city);
         $('.temperature').html(temp);
         $('.climate-bg').html(wcode);
         $('.windspeed').html(wind);
         $('.humidity').html(humidity);
      },
      error: function(error) {
         $('.error').html('<p>' + error + '</p>');
      }
   });
}
// search for a different location on user input
$('.cityNameSearch').on('keyup', function(event) {
   if (event.keyCode === 13) {
      loadWeatherOnSearch();
   }
});
