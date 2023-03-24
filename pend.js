
var gc = new GameCanvas();

var theta = Math.PI / 3; //Angle
var theta_dot = 0; //Angular velocity
var dt = 1 / 60; //Time step
var u = 0.2; //Air resistance
gc.setSize(900,600)
document.getElementById("length").addEventListener("input",loop);
document.getElementById("gravity").addEventListener("input",loop);
loop();
function loop() {
  var L= (document.getElementById("length").value)/5;
  var g= parseFloat(document.getElementById("gravity").value);
  clearScreen();
  
  var x = width / 2 + Math.cos(theta + Math.PI * 0.5) * 100 * L;
  var y = height / 2 + Math.sin(theta + Math.PI * 0.5) * 100 * L;
  line(width / 2, height / 2, x, y, 2, "white");
  circle(x, y, 20, "red");

  for (var i = 0; i < 10; i++) {
    var theta_doubleDot = -u * theta_dot -(g / L) * Math.sin(theta);
    theta_dot += theta_doubleDot * (dt / 10);
    theta += theta_dot * (dt / 10);
  }
    
  if (mouse.left) {
    theta = getAngle(width / 2, height / 2, mouse.x, mouse.y) - Math.PI * 0.5;
    theta_dot = 0;
  }
  
  update();
  requestAnimationFrame(loop);
}