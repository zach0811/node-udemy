const http = require("http");

const url = `http://api.weatherstack.com/current?access_key=7cd09fa535cf323ba309b475afdc5fc0&query=45,-75&units=f`;

const request = http.request(url, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data = data + chunk.toString();
    // console.log("chunk", chunk);
  });
  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});
request.on("error", (error) => {
  console.log("An Error", error);
});
request.end();
