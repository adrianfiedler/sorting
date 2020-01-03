require(['base-demo', 'sorters/bubblesort'], function (base, BubbleSort) {
  base.sorter = new BubbleSort(100);
  base.init();
});