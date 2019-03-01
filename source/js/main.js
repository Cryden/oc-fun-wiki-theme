// import Vue from 'vue'
// import VueResource from 'vue-resource'

try {
    window.$ = window.jQuery = require('jquery');

    window.Isotope = require('isotope-layout');
    window.imagesLoaded = require('imagesloaded');
    window.InfiniteScroll = require('infinite-scroll');
} catch (e) {}

// Vue.use(VueResource)

// new Vue({
//     el: '#app',
//     components: {}
// })

require('./components/main-menu.js')
// require('./components/font_loader.js')
require('./components/navigation.js')
require('./components/card_resizer.js')
// require('./components/service-worker.js')