if ('geolocation' in navigator) {
   navigator.geolocation.getCurrentPosition(function(position) {
      loadWeather(position.coords.latitude + ',' + position.coords.longitude);
   });
} else {
   loadWeather('timisoara', '');
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
// duplicate function, not sure how to refactor
function loadWeatherOnSearch(location, woeid) {
   // store data from input field
   var cityNameSearch = $('.cityNameSearch').val();
   console.log(cityNameSearch);
   $.simpleWeather({
      location: cityNameSearch,
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
