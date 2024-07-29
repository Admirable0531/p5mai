function preload() {
  myData = loadStrings('/maidata.txt');
}

function setup() {
  createCanvas(400, 400);
  background(220);
  circle(200,200,250);
  stroke("purple");
  strokeWeight(10);
  const numPoints = 8;
  const angleIncrement = (TWO_PI / numPoints);
  const startAngle = radians(22.5);

  for (let i = 0; i < numPoints; i++) {
    const angle = (i * angleIncrement + startAngle);
    const x = (125 * cos(angle))+200;
    const y = (125 * sin(angle))+200;
    point(x, y);
  }
  
  parse();
}

function draw() 
{

}

function parse()
{
  for(line in myData){
    curLine = myData[line];
    console.log(curLine)
    if(curLine.startsWith("&title=")){
      console.log("yes")
      const title = curLine.split('&title=');
      text(title[1], 10, 50, 90);
    }
  }
}