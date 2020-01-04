({
  optimize: 'none',
  baseUrl: 'js',
  dir: 'dist',
  modules: [
    {
      name: 'base-demo',
      include: [
        'uicomponents',
        'canvas-drawer'
      ]
    },
    {
      name: 'bubblesort-demo',
      include: ['sorters/bubblesort'],
      exclude: ['base-demo']
    },
    {
      name: 'quicksort-demo',
      include: ['sorters/quicksort'],
      exclude: ['base-demo']
    },
    {
      name: 'mergesort-demo',
      include: ['sorters/mergesort'],
      exclude: ['base-demo']
    }
  ]
})