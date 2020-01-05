
define('sorters/mergesort',[],function () {

  class MergeSort {

    constructor() {
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
        this.mergesort(0, list.length - 1);
      });

    }

    mergesort (left, right) {
      if (left >= right) {
        return;
      }

      const middle = Math.floor((left + right) / 2);
      this.merges++;
      this.mergesort(left, middle);
      this.mergesort(middle + 1, right);

      this.merge(left, middle, right);
      this.merges--;
      if (this.merges == 0) {
        this.resolve(this.list);
      }
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
require(['base-demo', 'sorters/mergesort'], function (base, MergeSort) {
  base.sorter = new MergeSort();
  base.init();
});
define("mergesort-demo", function(){});

