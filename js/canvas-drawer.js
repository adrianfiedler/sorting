define(['libs/p5.min'], function (p5) {
  class CanvasDrawer {
    constructor(canvasId, canvasParentID) {
      this.canvas = document.getElementById(canvasId);
      this.canvasParent = document.getElementById(canvasParentID);

      this.canvas.style.width = '100%';
      this.canvas.style.height = '100%';
      this.canvas.width = this.canvasParent.offsetWidth;
      this.canvas.height = 600

      this.canvasWidth = this.canvas.offsetWidth;
      this.canvasHeight = 600;
    }

    draw (values) {
      const canvasWidth = this.canvas.offsetWidth;
      const squareSize = canvasWidth / values.length;
      sketch.clear();
      for (let i = 0; i < values.length; i++) {
        const x = i * squareSize;
        const y = 0;

        var ctx = this.canvas.getContext("2d");

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect(x, y, squareSize, values[i]);
      }
    }
  }
  return CanvasDrawer;
});