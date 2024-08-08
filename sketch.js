function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES); // Use degrees for angle measurements
}

function draw() {
  background(255); // Set background to white

  // Center of the clock
  translate(width / 2, height / 2);

  strokeWeight(8);
  noFill();
  stroke(0);
  ellipse(0, 0, 300, 300);

  // Get current time
  let hr = hour();
  let mn = minute();
  let sc = second();

  // Draw hour hand
  strokeWeight(8);
  stroke(252, 3, 3);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  line(0, 0, 50 * cos(hourAngle - 90), 50 * sin(hourAngle - 90));

  // Draw minute hand
  strokeWeight(6);
  stroke(255, 226, 5);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  line(0, 0, 80 * cos(minuteAngle - 90), 80 * sin(minuteAngle - 90));

  // Draw second hand
  strokeWeight(4);
  stroke(34, 5, 255); // Red color for seconds
  let secondAngle = map(sc, 0, 60, 0, 360);
  line(0, 0, 100 * cos(secondAngle - 90), 100 * sin(secondAngle - 90));

  // Draw center point
  fill(0);
  noStroke();
  ellipse(0, 0, 10, 10);
}
