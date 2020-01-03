if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function () {

  class BubbleSort {

    constructor(delay = 0) {
      this.delay = delay;
    }

    sort (list, iterationObserver) {
      this.iterationObserver = iterationObserver;
      this.callStack = new Set();
      this.list = list;
      this.merges = 0;
      return new Promise((resolve, reject) => {
        this.resolve = resolve;
        this.reject = reject;
        if (!list) {
          return reject('list is undefined');
        }
        if (list.length == 0 || list.length == 1) {
          return resolve(list);
        }
        this.bubblesort();
      });

    }

    bubblesort () {
      let sorted = false;
      while (!sorted) {
        sorted = true;
        for (let i = 0; i < this.list.length - 1; i++) {
          if (this.list[i] > this.list[i + 1]) {
            this.swap(i, i + 1);
            sorted = false;
          }
        }
        if (this.iterationObserver) {
          this.iterationObserver(this.list);
        }
      }
      this.resolve(this.list);
    }

    swap (i, j) {
      let tmp = this.list[i];
      this.list[i] = this.list[j];
      this.list[j] = tmp;
    }
  }

  return BubbleSort;
});