define(function () {

  class MergeSort {

    constructor() {
      this.delay = 100;
    }
    sort (list, doneCallback) {
      this.doneCallback = doneCallback;
      this.callStack = new Set();
      this.list = this.mergesort(list);
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