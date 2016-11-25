## Building a mini weather app  
Made this app to learn more about async calls and API's.  
Weather data is provided by yahoo weather.  

[Preview app here] (https://liviulvu.github.io/weather-app-simpleweather/)
  

This project was inspired by a video tutorial from Upamanyu Das.  
[Video link: Building a Weather App using Javascript] (https://www.youtube.com/watch?v=lpLUx-0t7aE)  
  
###Changes made to original project:  
Optimized svg images:  
* Reduced SVG size using SVGO from node.js command line.  
* Removed SVG white space using Illustrator  
Modified layout to be mobile friendly  
Added:  
* Search field for location  
* Switch between Celsius / Fahrenheit  
* Placeholder data until the real data is loaded (prevents layout wild oscillation).  
* Error message when user input does not match any location  
