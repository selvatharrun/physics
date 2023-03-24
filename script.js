function myfunc() {
    var x = document.getElementById("mass").value;
    var y = document.getElementById("length").value;
    var z = document.getElementById("gravity").value;
    
    var in1 = x;
    document.getElementById('in1').innerHTML = "mass: " + in1;
    var in2 = y;
    document.getElementById('in2').innerHTML = "length: " + in2;
    var in3 = z;
    document.getElementById('in3').innerHTML = "gravity: " + in3;

    var damping = 0.995 - (0.0005 * x);
    document.getElementById('damping').innerHTML = "damping: " + damping;
    var angular_velocity = Math.sqrt(z / y);
    document.getElementById('angular_velocity').innerHTML = "angular velocity: " + angular_velocity;
    var time = 2 * 3.14 * Math.sqrt(y / z);
    document.getElementById('time').innerHTML = "time taken(for one oscillation): " + time;
}

