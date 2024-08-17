function setup() {
  createCanvas(400, 200);
  textAlign(CENTER, CENTER);
  textSize(48);
}

function draw() {
  background(0);
  fill(255);
  
  // Get the current time
  let h = hour();
  let m = minute();
  let s = second();
  
  // Format the time to always show two digits
  let timeStr = nf(h, 2) + ':' + nf(m, 2) + ':' + nf(s, 2);
  
  // Display the time
  text(timeStr, width / 2, height / 2);
}