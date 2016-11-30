var dsAPI = "https://api.darksky.net/forecast/463b500c501ce5c8a15de06f75ccb9b3/";
var dsLoc = "40.6936,-73.9857";
var dsQuery = "?units=ca";

var dsData;

var font;

function preload() {
  dsData = loadJSON(dsAPI + dsLoc + dsQuery);
  font = loadFont('content/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(500, 500);
  
  var temp = dsData.currently.temperature;
  
  console.log(temp);
  
  background(0);
}

function draw() {

}

/*

function getTempNY(data) {
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
  text(d + " and " + t + "°C at " + data.latitude + ", " + data.longitude + " (Brooklyn, NY).", 10, 490);
}
*/