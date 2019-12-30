if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function () {

  class MergeSort {

    constructor(delay = 0) {
      this.delay = delay;
    }

    sort (list, doneCallback) {
      this.doneCallback = doneCallback;
      this.callStack = new Set();
      this.list = list;
      this.mergesort(list);
      // this.mergesort(0, list.length - 1);
      doneCallback(this.list);
    }

    mergesort (list) {
      if (list.length <= 1) {
        return list;
      }
      const half = Math.floor(list.length / 2);
      let left = list.slice(0, half);
      let right = list.slice(half, list.length);
      left = this.mergesort(left);
      right = this.mergesort(right);

      return this.merge(left, right);
    }

    merge (left, right) {
      var res = [];
      while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
          res.push(left.shift());
        } else {
          res.push(right.shift());
        }
      }
      while (left.length > 0) {
        res.push(left.shift());
      }
      while (right.length > 0) {
        res.push(right.shift());
      }
      return res;
    }

  }

  return MergeSort;
});