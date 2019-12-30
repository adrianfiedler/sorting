require(['base-demo', 'sorters/quicksort'], function (base, QuickSort) {
  base.sorter = new QuickSort(100);
  base.init();
});