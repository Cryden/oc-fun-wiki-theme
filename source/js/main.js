// import Vue from 'vue'
// import VueResource from 'vue-resource'

try {
    window.$ = window.jQuery = require('jquery')
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