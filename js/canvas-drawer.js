define([], function () {
  class CanvasDrawer {
    constructor(canvasId, canvasParentID) {
      this.canvas = document.getElementById(canvasId);
      this.canvasParent = document.getElementById(canvasParentID);

      this.canvas.width = this.canvasParent.offsetWidth;
      this.canvas.height = 600

      this.canvasWidth = this.canvas.offsetWidth;
      this.canvasHeight = 600;
    }

    draw (history, delay) {
      return new Promise((resolve, reject) => {
        for (let histIndex = 0; histIndex < history.length; histIndex++) {
          setTimeout(() => {
            this.drawSquares(this.canvas, history[histIndex], history[histIndex - 1]);
            if (histIndex === history.length - 1) {
              resolve();
            }
          }, histIndex * delay);
        }
      });
    }

    drawSquares (canvas, values, prevValues) {
      const canvasWidth = canvas.offsetWidth;
      var ctx = canvas.getContext("2d");
      const squareSize = canvasWidth / values.length;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < values.length; i++) {
        const x = i * squareSize;
        const y = 0;
        if (prevValues && prevValues[i] !== values[i]) {
          ctx.fillStyle = "#6200ee";
        } else {
          ctx.fillStyle = "#018786";
        }
        ctx.fillRect(x, y, squareSize - 1, values[i]);
      }

    }
  }
  return CanvasDrawer;
});