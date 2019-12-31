if (typeof define !== 'function') { var define = require('amdefine')(module) }
define(function () {

  class MergeSort {

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
          reject('list is undefined');
        }
        if (list.length == 0 || list.length == 1) {
          resolve(list);
        }
        this.mergesort(0, list.length - 1);
      });

    }

    mergesort (left, right) {
      if (left >= right) {
        return;
      }

      const middle = Math.floor((left + right) / 2);
      // let timerId = setTimeout(() => {
      this.merges++;
      this.mergesort(left, middle);
      this.mergesort(middle + 1, right);

      this.merge(left, middle, right);
      this.merges--;
      // this.callStack.delete(timerId);
      // if (this.callStack.size == 0) {
      if (this.merges == 0) {
        this.resolve(this.list);
      }

      // }
      // }, this.delay);
      // this.callStack.add(timerId);
    }

    merge (left, middle, right) {
      let res = [];
      let leftArr = this.list.slice(left, middle + 1);
      let rightArr = this.list.slice(middle + 1, right + 1);
      while (leftArr.length > 0 && rightArr.length > 0) {
        if (leftArr[0] < rightArr[0]) {
          res.push(leftArr.shift());
        } else {
          res.push(rightArr.shift());
        }
      }
      while (leftArr.length > 0) {
        res.push(leftArr.shift());
      }
      while (rightArr.length > 0) {
        res.push(rightArr.shift());
      }
      for (let index = left, i = 0; index <= right; index++ , i++) {
        this.list[index] = res[i];
      }
      if (this.iterationObserver) {
        this.iterationObserver(this.list);
      }

    }

  }

  return MergeSort;
});