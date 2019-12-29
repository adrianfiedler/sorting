require.config({
  baseUrl: "/"
});
require(['js/libs/p5.min', 'js/sorters/quicksort', 'js/uicomponents'], function (p5, QuickSort, uicomps) {
  let values = [];

  let quickSortSizeInput = document.querySelector('#quicksort-size-input');
  quickSortSizeInput.addEventListener('change', () => {
    generateData(quickSortSizeInput.value)
  });

  let qs = new QuickSort();
  document.querySelector('#quick-sort-start').addEventListener('click', () => {
    if (qs) {
      document.querySelector('#quick-sort-start').disabled = true;
      qs.sort(values, sortIsDone);
    }
  });

  function sortIsDone () {
    console.log('DONE');
    document.querySelector('#quick-sort-start').disabled = false;
  }


  function generateData (size) {
    values = [];
    for (let i = 0; i < size; i++) {
      values.push(Math.random() * 400);
    }
  }

  new p5(function (sketch) {

    function createCanvas () {
      let canvasDiv = document.querySelector('#quicksort-sketch-div');
      const canvasWidth = canvasDiv.offsetWidth;
      const canvasHeight = 600;

      const canvas = sketch.createCanvas(canvasWidth, canvasHeight);
    }

    function setup () {
      sketch.frameRate(2);
      generateData(40);

      createCanvas();
    }

    function draw () {
      let canvasDiv = document.querySelector('#quicksort-sketch-div');
      const canvasWidth = canvasDiv.offsetWidth;
      const squareSize = canvasWidth / values.length;
      sketch.clear();
      for (let i = 0; i < values.length; i++) {
        const x = i * squareSize;
        const y = 0;

        sketch.fill(sketch.color(255, 255, 255));
        sketch.stroke(0);
        // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
        sketch.rect(x, y, squareSize, values[i]);
      }
    }

    sketch.setup = setup;
    sketch.draw = draw;

  }, 'quicksort-sketch-div');
});