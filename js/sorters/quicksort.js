define(function () {

  class QuickSort {

    constructor() {
      this.delay = 100;
    }
    sort (list, doneCallback) {
      this.list = list;
      this.doneCallback = doneCallback;
      this.callStack = new Set();
      this.quicksort(0, this.list.length - 1);
    }

    quicksort (left, right) {
      if (left < right) {
        const teiler = this.partition(left, right);

        let that = this;
        let timerId = setTimeout(function () {
          that.quicksort(left, teiler - 1);
          that.quicksort(teiler + 1, right);
          that.callStack.delete(timerId);
          if (that.doneCallback && that.callStack.size == 0) {
            that.doneCallback();
          }
        }, this.delay);
        this.callStack.add(timerId);
      }
    }

    partition (left, right) {
      let i = left;
      let j = right - 1;
      let pivot = this.list[right];

      do {
        while (i < right && this.list[i] < pivot) {
          i++;
        }

        while (j > left && this.list[j] >= pivot) {
          j--;
        }
        if (i < j) {
          const temp = this.list[i];
          this.list[i] = this.list[j];
          this.list[j] = temp;
        }
      } while (i < j)
      let temp = this.list[i];
      this.list[i] = pivot;
      this.list[right] = temp;
      return i;
    }
  }

  return QuickSort;
});