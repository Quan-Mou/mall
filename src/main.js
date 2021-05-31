import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import toast from "./components/common/toast";
import VueLazyLoad from "vue-lazyload";

import FastClick from "fastclick";

Vue.config.productionTip = false;
Vue.use(toast);
Vue.use(VueLazyLoad, {
    loading: require("./assets/img/common/Quan-Mou.png")
});

FastClick.attach(document.body);
Vue.prototype.$bus = new Vue();
new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");
