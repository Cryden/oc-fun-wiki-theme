$(document).ready(function () {
  card_resize();
  list_resize();
});

window.addEventListener('resize', function () {
  card_resize();
  list_resize();
});


function card_resize() {
  list_width = ($('.card_list').width());
  max_width = 300;
  min_width = 250;
  column_min = Math.floor(list_width / max_width) + 1;
  column_max = Math.floor(list_width / min_width)
  if (column_min < column_max) {
    column_min = column_max
  }
  width = (list_width / column_min)

  $('.card-item').css('max-width', width);
  $('.card-item').css('min-width', width);
}

function list_resize() {
  list_width = ($('.list').width());
  max_width = 530;
  min_width = 250;
  column_min = Math.floor(list_width / max_width) + 1;
  column_max = Math.floor(list_width / min_width)
  if (column_min < column_max) {
    column_min = column_max
  }
  width = (list_width / column_min)

  $('.list_item').css('max-width', width);
  $('.list_item').css('min-width', width);
}

// vanilla JS
const Isotope = require('isotope-layout');
var imagesLoaded = require('imagesloaded');
const InfiniteScroll = require('infinite-scroll');

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
    masonry: {
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer'
    },
    itemSelector: '.grid-item'
});

imagesLoaded(grid).on( 'progress', function() {
    iso.layout();
});

InfiniteScroll.imagesLoaded = imagesLoaded;

function getPenPath() {
    $link = (this.loadCount+2 < $last_page) ? 'more-news/' + this.loadCount : '';
    return $link;
}

  
var infScroll = new InfiniteScroll( grid, {
    path: getPenPath,
    append: '.grid-item',
    outlayer: iso,
    status: '.page-load-status',
    history: false
});