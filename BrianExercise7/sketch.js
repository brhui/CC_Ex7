var dsAPI = "https://api.darksky.net/forecast/463b500c501ce5c8a15de06f75ccb9b3/";
var dsLoc = "40.6936,-73.9857";
var dsQuery = "?units=ca";

// var dsData;

var font;


var elipX = 100
var elipY = 400

function preload() {
  dsData = loadJSON(dsAPI + dsLoc + dsQuery, draw, "jsonp");
  font = loadFont('content/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);

  // Variables for storing weather data
  var weatherArray = [dsData.currently.visibility, dsData.currently.ozone, dsData.currently.dewPoint];
  var temp = getTemp(dsData);
  var aTemp = getApTemp(dsData);
  var summary = getConditions(dsData);
  var windB = getWindBearing(dsData);
  var windS = getWindSpeed(dsData);
  // var windDir = createVector(windB, windB);
  // var wind = windS + windDir;

  // For loop to draw circles based on weather array
  for (var i = 0; i < weatherArray.length; i++) {
    fill(weatherArray[i], 123, 140)
    ellipse(weatherArray[i], weatherArray[i], weatherArray[i], weatherArray[i]);
  }

  // Outside conditions affect the speed and movement of the drawn ellipses
  if (summary == "Light Rain" || summary == "Drizzle") {
    elipX += windS / 9;
    elipY += windB / 9;
  }
  if (summary == "Rain") {
    elipX += windS / 4;
    elipY += windB / 4;
  }
  if (summary == "Heavy Rain") {
    elipX += windS;
    elipY += windB;
  }
  if (summary == "Mostly Cloudy" || summary == "Overcast") {
    elipX += windS / 12;
    elipY += random(-3, 3);
    temp *= 10;
  }

  // Draws ellipses back on canvas if they leave the canvas
  if (elipX > width) {
    elipX = -temp;
  }

  if (elipY > height) {
    elipY = -temp;
  }

  // Ellipses drawn here
  noStroke();

  fill(20, 151, 233);
  ellipse(elipX, elipY, temp, aTemp);

  fill(233, 20, 151);
  ellipse(elipX + windS * 10, elipY + windB * 2, temp, aTemp)

  fill(220, 125, 23);
  ellipse(elipX/2, elipY*2, temp, aTemp);

  // Text
  textSize(14);
  fill(255);
  text(summary + " and " + temp + "°C at " + dsData.latitude + ", " + dsData.longitude + " (Brooklyn, NY).", 10, 490);


  /* Console Log statements to test retrieval of information from API
  console.log("Temperature is: " + temp);
  console.log("Feels like: " + aTemp);
  console.log(summary);
  console.log("Wind bearing is at " + windB)
  console.log("Winds of " + windS + "km/h")
  */
}

// Custom functions to return weather data
function getTemp(data) {
  return data.currently.temperature;
}

function getApTemp(data) {
  return data.currently.apparentTemperature;
}

function getConditions(data) {
  return data.currently.summary;
}

function getWindBearing(data) {
  return data.currently.windBearing;
}

function getWindSpeed(data) {
  return data.currently.windSpeed;
}

// Mouse Click function to draw ellipses in random locations on canvas
function mouseClicked() {
  if (mouseButton == LEFT) {
    elipX = random(width);
    elipY = random(height);
  }
}
