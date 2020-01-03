require(['base-demo', 'sorters/bubblesort'], function (base, BubbleSort) {
  base.sorter = new BubbleSort();
  base.init();
});