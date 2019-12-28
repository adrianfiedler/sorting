requirejs(["p5"], function (p5) {
  let myP5 = new p5(function (sketch) {
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
          colors[i].push(sketch.color(255, 255, 255));
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

          sketch.fill(colors[col][row]);
          sketch.stroke(0);
          // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
          sketch.rect(x, y, squareSize, squareSize);
        }
      }
    }

    function mouseDragged () {
      if (sketch.mouseX > 0 && sketch.mouseX < canvasWidth && sketch.mouseY > 0 && sketch.mouseY < canvasHeight) {
        const col = Math.floor(sketch.mouseX / squareSize);
        const row = Math.floor(sketch.mouseY / squareSize);

        colors[col][row] = sketch.color(0);
      }
    }

    sketch.setup = setup;
    sketch.draw = draw;
    sketch.mouseDragged = mouseDragged;

  }, 'sketchDiv');


});