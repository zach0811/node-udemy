
const request = require('request')
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

// const url = 'http://api.weatherstack.com/current?access_key=7cd09fa535cf323ba309b475afdc5fc0&query=37.8267,-122.4233&units=f'

// request({url: url, json: true}, (error, response) => {
// // console.log(response.body.current)
// // console.log(response.body.current.weather_descriptions[0])
// if(error) {
//     console.log('Unable to Connect')
// } else if(response.body.error) {
//     console.log('Unable to find location')
// } else {
// const currentWeather=response.body.current
// console.log(`It is currently ${currentWeather.temperature} degrees out. There is a ${currentWeather.precip}% chance of rain.`)
// }
// })

geoCode(
  `${process.argv[2]}`,
  (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log("error1", error);
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log("error2", error);
      }

      console.log("data location", location);
      console.log("forecast data", forecastData);
    });
  }
);

console.log("log", process.argv[2]);






