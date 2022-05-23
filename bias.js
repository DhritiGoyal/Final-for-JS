//global variables to handle the table
var table;
var numRows, numCols;
//creating global variable to hold the values extracted from the csv
var bias = [], biasvalue20 = []; biasvalue15 = []; biasvalue10 = [];
biasvalue05 = [];
//x,y of the circle's center
var x = 0;
var y = 0;
var d = 100;
var theta = 0;

//preload the table table
function preload() {
  table = loadTable('assets/bias20-00.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1100, 1000);

  //getting basic information from the table
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //printing in the Console to check it I am getting the right result 
  print("rows: " + numRows + " Cols: " + numCols)
  
  //assigning values to the variable created before
  //getNum wasnt working for me?
  bias = table.getColumn( "Bias20");
  biasvalue20 = table.getColumn("BiasVal20");
  biasvalue15 = table.getColumn("BiasVal15");
  biasvalue10 = table.getColumn("BiasVal10");
  biasvalue05 = table.getColumn("BiasVal05");
  // print(bias,biasvalue, offense, offensevalue, offender, offendervalue)

  //redefining x and y for the positioning on the page
  x = d * cos(theta);
  y = d * sin(theta);
  //translating my entire sketch, so that it would appear in the center. 
  translate(width /2, height /2);

  //creating a for loop so that I can access all the row values in the table 
  for(let r = 0; r < numRows; r++){
  fill(255);

  //QUARTER_PI is a mathematical constant with the value 0.7853982
  rotate(QUARTER_PI / 4.35);
  //Circles for year 2000-2005::lightest
  fill(0, 164, 255);
  stroke(255, 204, 0);
  circle(x+50,y+80, biasvalue05[r]/3);

  //Circles for year 2005-2010
  fill(0, 94, 255);
  stroke(255, 204, 0);
  circle(x+100,y+80, biasvalue10[r]/3);

  //Circles for year 2010-2015
  fill(0, 0, 255);
  stroke(255, 204, 0);
  circle(x+150,y+80, biasvalue15[r]/3);

  //Circles for year 2015-2020::darkest 
  //this one is also on the top 
  fill(0, 0, 139);
  stroke(255, 204, 0);
  circle(x+200,y+80, biasvalue20[r]/3);

  //creating text for the categories of bias 
  fill(255, 0, 0);
  noStroke();
  text(bias[r], x+240, y+80);
 }
}

function draw(){
  rectMode(CENTER)
  //creating new variables to create a table in the top right corner for the years and colors
  var year00 = 'Year 2000-2005'
  var year05 = 'Year 2005-2010'
  var year10 = 'Year 2010-2015'
  var year15 = 'Year 2015-2020'
  //text for year 2000-2005::lightest
  fill(0, 164, 255);
  text(year00, 980, 180);
  rect(1100, 175, 40,10)

  //text for year 2005-2010
  fill(0, 94, 255);
  text(year05, 980, 200);
  rect(1100, 195, 40,10)

  //text for year 2010-2015
  fill(0, 0, 255);
  text(year10, 980, 220);
  rect(1100, 215, 40,10)

  //text for year 2015-2020::darkest 
  fill(0, 0, 139);
  text(year15, 980, 240);
  rect(1100, 235, 40,10)
}
