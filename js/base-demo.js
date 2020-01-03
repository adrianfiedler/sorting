define(['uicomponents', 'canvas-drawer'], function (uicomponents, CanvasDrawer) {
  let config = {
    initData: 40,
    delay: 100,
    values: [],
    // set in concrete sorter
    sorter: null,
    dataHistory: [],
    canvasDrawer: new CanvasDrawer('sketch-canvas', 'canvas-parent'),

    init: function () {
      let sortSizeInput = document.querySelector('#size-input');
      sortSizeInput.addEventListener('change', () => {
        this.generateData(sortSizeInput.value);
        this.drawHistoryOnCanvasAndActivateSortButton();
      });

      let sortMsInput = document.querySelector('#ms-input');
      sortMsInput.addEventListener('change', () => {
        this.delay = sortMsInput.value;
      });

      document.querySelector('#sort-start').addEventListener('click', () => {
        this.setSortButtonDisabled(true);
        if (this.sorter) {

          const iterationObserver = function (data) {
            this.dataHistory.push(Array.from(data));
          };
          this.sorter.sort(this.values, iterationObserver.bind(this)).then((sortedList) => {
            this.dataHistory.push(Array.from(sortedList));
            this.drawHistoryOnCanvasAndActivateSortButton();
          });
        }
      });

      this.generateData(this.initData);
      this.drawHistoryOnCanvasAndActivateSortButton();
    },

    generateData: function (size) {
      this.values = [];
      this.dataHistory = [];
      for (let i = 0; i < size; i++) {
        this.values.push(Math.random() * 400);
      }
      this.dataHistory.push(Array.from(this.values));
    },

    drawHistoryOnCanvasAndActivateSortButton: async function () {
      await this.canvasDrawer.draw(this.dataHistory, this.delay);
      this.setSortButtonDisabled(false);
    },

    setSortButtonDisabled (disabled) {
      document.querySelector('#sort-start').disabled = disabled;
    }
  };
  return config;
});