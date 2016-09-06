## Building a mini weather app  
Made this app to learn more about async calls and API's.  
Weather data is provided by yahoo weather.  

[Preview app here] (https://liviulvu.github.io/weather-app-simpleweather/)
  
![image](https://github.com/LiviuLvu/weather-app-simpleweather/blob/gh-pages/weather-app.png)

This project was inspired by a video tutorial from Upamanyu Das.  
[Video link: Building a Weather App using Javascript] (https://www.youtube.com/watch?v=lpLUx-0t7aE)  
  
###Changes made to original project:  
Optimized svg images:  
* Reduced SVG size using SVGO from node.js command line.  
* Removed SVG white space using Illustrator  
Modified layout to be mobile friendly  
Added:
* Search field for location  
* Placeholder data until the real data is loaded (loading lasts a few miliseconds if geodata is allowed).
* Error message when user input does not match any location

To do:    
* Show location current time    
* Switch from Celsius to Farenheit
