require(['base-demo', 'sorters/quicksort'], function (base, QuickSort) {
  base.sorter = new QuickSort();
  base.init();
});