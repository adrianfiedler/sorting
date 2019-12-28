requirejs(["p5"], function (p5) {
  var myp5 = new p5(function (sketch) {
    const canvasWidth = 800;
    const canvasHeight = 800;
    const squareSize = 20;
    const cols = Math.floor(canvasWidth / squareSize);
    const rows = Math.floor(canvasHeight / squareSize);
    const colors = [];

    function setup () {
      const canvas = sketch.createCanvas(canvasWidth, canvasHeight);
      for (let i = 0; i < cols; i++) {
        colors.push(new Array());
        for (let j = 0; j < rows; j++) {
          colors[i].push(color(255, 255, 255));
        }
      }
    }

    function draw () {
      // Begin loop for columns
      for (let col = 0; col < cols; col++) {
        // Begin loop for rows
        for (let row = 0; row < rows; row++) {

          const x = col * squareSize;
          const y = row * squareSize;

          fill(colors[col][row]);
          stroke(0);
          // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
          rect(x, y, squareSize, squareSize);
        }
      }
    }

    function mouseDragged () {
      if (mouseX > 0 && mouseX < canvasWidth && mouseY > 0 && mouseY < canvasHeight) {
        const col = Math.floor(mouseX / squareSize);
        const row = Math.floor(mouseY / squareSize);

        colors[col][row] = color(0);
      }
    }

    sketch.setup = setup;
    sketch.mouseDragged = mouseDragged;

  }, 'sketchDiv');


});