import Vue from "vue";
import Vuex from "vuex";

import builder from "./builder";
import viewer from "./viewer";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { builder, viewer }
});
