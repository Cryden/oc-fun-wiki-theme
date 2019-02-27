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

//-------------------------------------//
// hack CodePen to load pens as pages

// var nextPenSlugs = [
//     '202252c2f5f192688dada252913ccf13',
//     'a308f05af22690139e9a2bc655bfe3ee',
//     '6c9ff23039157ee37b3ab982245eef28',
//   ];
  
//   function getPenPath() {
//     // var slug = nextPenSlugs[ this.loadCount ];
//     console.log( this.loadCount );
//     return '/dark-sun';
//   }

//   //-------------------------------------//
//   // init Infinte Scroll
  
//   var infScroll = new InfiniteScroll( grid, {
//     path: getPenPath,
//     append: '.grid-item',
//     outlayer: iso,
//     status: '.page-load-status',
//   });