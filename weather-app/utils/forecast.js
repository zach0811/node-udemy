const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=7cd09fa535cf323ba309b475afdc5fc0&query=${
    (latitude, longitude)
  }&units=f`;
  console.log("coord", latitude, longitude);
  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable To Connect", undefined);
    } else if (response.body.code === 601) {
      callback("Please enter coordinates", undefined);
    } else {
      console.log(response.body);
      callback(undefined, {
        // latitude: response.body.features[0].center[0],
        // longitude: response.body.features[0].center[1],
        // location: response.body.location.name,
      });
    }
  });
};

module.exports = forecast;
