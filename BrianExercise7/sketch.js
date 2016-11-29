var dsData;
var temp;
var font;

function preload() {
  var url = "https://api.darksky.net/forecast/463b500c501ce5c8a15de06f75ccb9b3/40.6936,-73.9857?units=ca";
  dsData = loadJSON(url);
  font = loadFont('content/OpenSans-Bold.ttf');
}

function setup() {
  createCanvas(700, 700);
  background(0)
  temp = dsCallTemp(dsData);
  console.log(temp);
}

function draw() {
  textFont(font);
  textSize(40);
  noStroke();
  fill(255);

  text(temp, 300, 300);
}

function dsCallTemp(data) {
  var main = data.currently;
  var t = currently.temperature;
  return data.currently.temperature;
} 