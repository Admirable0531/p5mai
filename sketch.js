function preload() {
  myData = loadStrings('/maidata.txt');
}

function setup() {
  createCanvas(400, 600);
  background(50);
  rect(0,500,400,600)
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
  let diffArray = [];
  let collectingData = false;
  timeline = [];
  for(line in myData){
    curLine = myData[line];
    // console.log(curLine)
    if(curLine.startsWith("&title=")){
      const title = curLine.split('&title=');
      text(title[1], 10, 50, 90);
    }
    if (collectingData) {
      if (curLine.startsWith("E")) {
        collectingData = false;
        diffArray.push(curLine);
        break;
      }
      diffArray.push(curLine);
    } else if (curLine.startsWith("&inote_5=")) {
      collectingData = true;
      diffArray.push(curLine);
    }
  }
  
  printDiff(diffArray);
}

function printDiff(diffArray){
  for(line in diffArray){
    console.log(diffArray[line]);
  }
}

function parseBeatDivisor() {

}