require(['base-demo', 'sorters/mergesort'], function (base, MergeSort) {
  base.sorter = new MergeSort(100);
  base.init();
});