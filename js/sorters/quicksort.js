define(function () {

  class QuickSort {

    constructor() {
      this.delay = 500;
    }
    sort (list, doneCallback) {
      this.list = list;
      this.doneCallback = doneCallback;
      this.callStack = new Set();
      this.quicksort(0, this.list.length - 1);
    }

    quicksort (links, rechts) {
      if (links < rechts) {
        const teiler = this.teile(links, rechts);

        let that = this;
        let timerId = setTimeout(function () {
          that.quicksort(links, teiler - 1);
          that.quicksort(teiler + 1, rechts);
          that.callStack.delete(timerId);
          if (that.doneCallback && that.callStack.size == 0) {
            that.doneCallback();
          }
        }, this.delay);
        this.callStack.add(timerId);
      }
    }

    teile (links, rechts) {
      let i = links;
      let j = rechts - 1;
      let pivot = this.list[rechts];

      do {
        while (i < rechts && this.list[i] < pivot) {
          i++;
        }

        while (j > links && this.list[j] >= pivot) {
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
      this.list[rechts] = temp;
      return i;
    }
  }

  return QuickSort;
});