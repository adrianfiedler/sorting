define(['libs/p5.min', 'uicomponents'], function (p5) {
  let config = {
    canvasId: 'sketch-div',
    initData: 40,
    values: [],
    // set in concrete sorter
    sorter: null,

    init: function () {
      let sortSizeInput = document.querySelector('#size-input');
      sortSizeInput.addEventListener('change', () => {
        this.generateData(sortSizeInput.value);
      });

      let sortMsInput = document.querySelector('#ms-input');
      sortMsInput.addEventListener('change', () => {
        if (this.sorter) {
          this.sorter.delay = sortMsInput.value;
        }
      });

      document.querySelector('#sort-start').addEventListener('click', () => {
        document.querySelector('#sort-start').disabled = true;
        if (this.sorter) {

          function iterationObserver (data) {
            this.values = data;
          }
          this.sorter.sort(this.values, iterationObserver).then((sortedList) => {
            this.values = sortedList;
            document.querySelector('#sort-start').disabled = false;
          });
        }
      });

      this.generateData(this.initData);
      new p5(function (sketch) {

        function createCanvas () {
          let canvasDiv = document.querySelector(`#${config.canvasId}`);
          const canvasWidth = canvasDiv.offsetWidth;
          const canvasHeight = 600;

          sketch.createCanvas(canvasWidth, canvasHeight);
        }

        function setup () {
          sketch.frameRate(2);
          createCanvas();
        }

        function draw () {
          let canvasDiv = document.querySelector(`#${config.canvasId}`);
          const canvasWidth = canvasDiv.offsetWidth;
          const squareSize = canvasWidth / config.values.length;
          sketch.clear();
          for (let i = 0; i < config.values.length; i++) {
            const x = i * squareSize;
            const y = 0;

            sketch.fill(sketch.color(255, 255, 255));
            sketch.stroke(0);
            // For every column and row, a rectangle is drawn at an (x,y) location scaled and sized by videoScale.
            sketch.rect(x, y, squareSize, config.values[i]);
          }
        }

        sketch.setup = setup;
        sketch.draw = draw;

      }, config.canvasId);
    },

    generateData: function (size) {
      this.values = [];
      for (let i = 0; i < size; i++) {
        this.values.push(Math.random() * 400);
      }
    }
  };
  return config;
});