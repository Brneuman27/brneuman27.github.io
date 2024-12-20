var cWidth = 1000; 
var cHeight = 500; 

var fish; 

function setup() { 
  createCanvas(cWidth, cHeight); 
  colorMode(HSB, 100); 
  fish = new Fish(500, 250); 
  console.log(fish); 
} 

function draw() { 
  background(65, 70, 70); 
  fish.drawSelf(); 
  fish.move(); 
} 

function placeFree(obj, x, y) { 
  if (x - obj.size/2 < 0) { return false; } 
  if (x + obj.size/2 > cWidth) { return false; } 
  if (y - obj.size/2 < 0) { return false; } 
  if (y + obj.size/2 > cHeight) { return false; } 
  
  return true; 
}
