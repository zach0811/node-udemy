
const request = require('request')

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

const locationRequestUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/cyufhg5.json?access_token=pk.eyJ1IjoiemR3aWxraW5zIiwiYSI6ImNsNXUxaWNjOTJ4ZTEzY2x2dzBzNWV6ZnAifQ.3CQoxWcVHZBsxzOZkjE2Lw&limit=1'

request({url: locationRequestUrl, json: true}, (error, response) => {
if(error) {
    console.log('No connectivity')
} else if (response.body.features.length === 0) {
console.log('No location found')
} else {
    console.log(response)
console.log(response.body.features)
// const latitude = response.body.features[0].center[1]
// const longitude = response.body.features[0].center[0]
// console.log(latitude, longitude)
}

})