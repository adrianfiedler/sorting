define(['libs/p5.min', 'sorters/quicksort'], function (p5, QuickSort) {
  new p5(function (sketch) {
    const canvasWidth = window.innerWidth;
    const canvasHeight = 600;
    const squareSize = 20;
    const cols = Math.floor(canvasWidth / squareSize);
    const rows = Math.floor(canvasHeight / squareSize);
    const values = [];

    function setup () {
      const canvas = sketch.createCanvas(canvasWidth, canvasHeight);
      for (let i = 0; i < cols; i++) {
        values.push(Math.random() * 400);
      }
      sketch.frameRate(2);
      let qs = new QuickSort(values);
      qs.sort();
    }

    function draw () {
      sketch.clear();
      for (let col = 0; col < cols; col++) {
        const x = col * squareSize;
        const y = 0;

        sketch.fill(sketch.color(255, 255, 255));
        sketch.stroke(0);
        // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
        sketch.rect(x, y, squareSize, values[col]);
      }
    }

    sketch.setup = setup;
    sketch.draw = draw;

  }, 'sketchDiv');
});