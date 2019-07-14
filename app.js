import $ from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

import Vue from 'vue';

import Main from './main';

new Vue({
  render: h => h(Main),
}).$mount('#app');