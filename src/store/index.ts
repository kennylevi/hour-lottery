import Vue from "vue";
import Vuex from "vuex";
import MODAL_STORE from "./modal";
import TEMPLATE_STORE from "./template";
import LOGGED_IN from "./login";
import GAMES from './games'


Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    MODAL_STORE,
    TEMPLATE_STORE,
    LOGGED_IN,
    GAMES
  }
});
