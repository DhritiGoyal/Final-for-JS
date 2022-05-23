//global variables to handle the table
var table;
var numRows, numCols;
//creating global variable to hold the values extracted from the csv
var race = [], value05 = []; value10 = []; value15 = [];
value20= [];
//x,y of the circle's center
var x = 0;
var y = 0;
var d = 100;
var theta = 0;

//preload the table table
function preload() {
  table = loadTable('assets/offender-race.csv', 'csv', 'header');
}

function setup() {
  createCanvas(2000, 1200);
  //getting basic info from the table
  numRows = table.getRowCount();
  numCols = table.getColumnCount();
  //printing in the Console to check it I am getting the right result 
  print("rows: " + numRows + " Cols: " + numCols)
  
  //assigning values to the variable created before
  var race = table.getColumn( "race");
  var value20 = table.getColumn("value20");
  var value15 = table.getColumn("value15");
  var value10 = table.getColumn("value10");
  var value05 = table.getColumn("value05");


  //redefining x and y for the positioning on the page
  var x = d * cos(theta);
  var y = d * sin(theta);
  translate(width /2, height/5);

    //creating a for loop so that I can access all the row values in the table 
  for(let r = 0; r < numRows; r++){
 
  //QUARTER_PI is a mathematical constant with the value 0.7853982
  rotate(QUARTER_PI / 2.35);
    //Circles for year 2000-2005::lightest
  fill(0, 200, 255);
  stroke(255, 204, 0);
  circle(x,y, value05[r]/5);
//  fill(255, 0, 0);
//  noStroke();
//  text(race[r], x, y);

  fill(0, 100, 255);
  stroke(255, 204, 0);
 circle(x+100,y+100, value10[r]/5);
//  fill(255, 0, 0);
//  noStroke();
//  text(race[r], x+50, y+300);

  fill(0, 0, 255);
  stroke(255, 204, 0);
 circle(x+200,y+200, value15[r]/5);
//  fill(255, 0, 0);
//  noStroke();
//  text(race[r], x+100, y+400);

 fill(0, 0, 139);
 stroke(255, 204, 0);
 circle(x+300,y+300, value20[r]/5);
//  text(value20[r], x+500, y+500);

  //creating text for the categories of race
  fill(255, 0, 0);
  noStroke();
  text(race[r], x+500, y+500);
 }
}

function draw(){
  rectMode(CENTER)
    //creating new variables to create a table in the top right corner for the years and colors
  var year00 = 'Year 2000-2005';
  var year05 = 'Year 2005-2010';
  var year10 = 'Year 2010-2015';
  var year15 = 'Year 2015-2020';
    //text for year 2000-2005::lightest
  fill(0, 164, 255);
  text(year00, 980, 180);
  rect(1100, 175, 40,10)

  fill(0, 94, 255);
  text(year05, 980, 200);
  rect(1100, 195, 40,10)

  fill(0, 0, 255);
  text(year10, 980, 220);
  rect(1100, 215, 40,10)

    //text for year 2015-2020::darkest 
  fill(0, 0,139);
  text(year15, 980, 240);
  rect(1100, 235, 40,10)
}
