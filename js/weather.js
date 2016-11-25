if ('geolocation' in navigator) {
  // display weather based on geolocation data
  navigator.geolocation.getCurrentPosition(function(position) {
    loadWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
}
// else {
//    // default to Timisoara location if no geodata is available
//    loadWeather(45.753935299999995 + ',' + 21.223871700000004);
// }

$(document).ready(function() {
  loadWeather();
});

function loadWeather(location) {
  // store data from input field
  var cityNameSearch = $('.cityNameSearch').val();
  if (cityNameSearch !== '') {
    location = cityNameSearch;
  }

  $.simpleWeather({
    location: location,
    unit: 'c',
    success: function(weather) {

      var city = weather.city;
      var celsius = weather.temp + weather.units.temp; // Celsius
      var alt = weather.alt.temp + weather.alt.unit;  // Object {high:52low:34temp:45unit:"f"}
      var wcode = '<img class="weathericon" src="images/weathericons/' + weather.code + '.svg">';
      var wind = '<p>' + weather.wind.speed + '</p><p>' + weather.units.speed + '</p>';
      var humidity = weather.humidity + ' %';
      
      // do something to change the temp units by clicking on switch
      $('.switch').on('click', function(event) {
        event.preventDefault();
        if (celsius.match(/C/)) {
          $('.temperature').html(alt);
          celsius = alt;
        } 
        else {
          celsius = weather.temp + weather.units.temp;
          $('.temperature').html(celsius);
        }
      });

      $('.location').text(city);
      $('.temperature').html(celsius);
      $('.climate-bg').html(wcode);
      $('.windspeed').html(wind);
      $('.humidity').html(humidity);
    },

    error: function(error) {
      // if search field is not empty and data cannot be found, show error
      if (cityNameSearch !== '') {
        $('.error').html('<p>' + error + '</p>');
      }
    }
  });
}


// search for a different location on user input
$('.cityNameSearch').on('keyup', function(event) {
  if (event.keyCode === 13) {
    loadWeather();
    // clear input
    $(this).val('');
    // clear errors if any
    $('.error').html('');
  }
});
