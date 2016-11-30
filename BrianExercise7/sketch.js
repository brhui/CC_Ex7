var dsAPI = "https://api.darksky.net/forecast/463b500c501ce5c8a15de06f75ccb9b3/";
var dsLoc = "40.6936,-73.9857";
var dsQuery = "?units=ca";

// var dsData;

var font;

function preload() {
  dsData = loadJSON(dsAPI + dsLoc + dsQuery, draw, "jsonp");
  font = loadFont('content/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(0);


  var temp = getTemp(dsData);
  var aTemp = getApTemp(dsData);
  var summary = getConditions(dsData);
  var windB = getWindBearing(dsData);
  var windS = getWindSpeed(dsData);

  console.log("Temperature is: " + temp);
  console.log("Feels like: " + aTemp);
  console.log(summary);
  console.log("Wind bearing is at " + windB)
  console.log("Winds of " + windS + "km/h")

  noStroke();
  fill(20, 151, 233);
  ellipse(100, 100, temp, temp);

  ellipse(150, 150, aTemp, aTemp);

  textSize(14);
  fill(255);
  text(summary + " and " + temp + "°C at " + dsData.latitude + ", " + dsData.longitude + " (Brooklyn, NY).", 10, 490);

}


function getTemp(data) {
  return data.currently.temperature;

  /*
  var t = data.currently.temperature;
  var a = data.currently.apparentTemperature;
  var m = data.currently.windBearing;
  var d = data.currently.summary;
  var w = data.hourly.windSpeed;
  noStroke();
  fill(a, w, m);
  ellipse(100, 100, t, a);
  
  fill(t, m, a);
  ellipse(250, 200, m, m);
  textSize(14);
  fill(255);
  text(d + " and " + t + "°C at " + data.latitude + ", " + data.longitude + " (Brooklyn, NY).", 10, 490); */

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
