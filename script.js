function cubeText() {
    console.log("Function triggered!");
    var str = " ".concat(document.getElementById("input-cube").value);
    document.getElementById("cube-face-1").innerText = str;
    document.getElementById("cube-face-2").innerText = str;
    document.getElementById("cube-face-3").innerText = str;
    document.getElementById("cube-face-4").innerText = str;
    document.getElementById("cube-face-5").innerText = str;
    document.getElementById("cube-face-6").innerText = str;
}

document.addEventListener("DOMContentLoaded", function () {
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");

    var size = Math.min(window.innerWidth, window.innerHeight);
    var dpr = window.devicePixelRatio || 1;
  
    // Set physical size
    canvas.width = size * dpr;
    canvas.height = size * dpr;
  
    // Set CSS size
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";
  
    context.scale(dpr, dpr);
  
    var cols = 23;
    var rows = 16;
    var days = 368;
  
    var gridw = size * 0.75;
    var gridh = size * 0.55;
    var cellw = gridw / cols;
    var cellh = gridh / rows;
    var margx = (size - gridw) * 0.5;
    var margy = (size - gridh) * 0.5;
  
    for (let i = 0; i < days; i++) {
      var col = Math.floor(i / rows);
      var row = i % rows;
  
      var x = margx + col * cellw;
      var y = margy + row * cellh;
      var w = 2;
      var h = 30;
  
      context.save();
      context.translate(x, y);
      
      context.fillStyle = "white"
      context.beginPath();
      context.rect(0, 0, cellw, cellh);
      context.clip();
  
      context.translate(cellw * 0.5, cellh * 0.5);
  
      var phi = (i / days) * Math.PI;
      var theta = Math.sin(phi) * Math.PI * 0.45 + 0.85;
  
      context.rotate(theta);
  
      var scale = Math.abs(Math.cos(phi)) * 2 + 1;
  
      context.scale(scale, 1);
  
      context.beginPath();
      context.rect(w * -0.5, h * -0.5, w, h);
      context.fill();
  
      context.restore();
    }
});