let brushSize = 10;
let brushColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  brushColor = color(66, 135, 245); // Default brush color is black
  background(200); // Set background to white
}

function draw() {
  // Check if the mouse is pressed
  if (mouseIsPressed) {
    // Set brush color and size
    stroke(brushColor);
    strokeWeight(brushSize);
    // Draw on the canvas
    line(mouseX, mouseY, pmouseX, pmouseY);
  }
}

// Resize canvas when the window size changes
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(255); // Clear canvas on resize
}