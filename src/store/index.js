import Vue from "vue";
import Vuex from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
Vue.use(Vuex);
const state = {
    CartList: []
};
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    modules: {},
    getters
});
export default store;
