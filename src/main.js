import Vue from "vue";

import VueI18n from "vue-i18n";

import App from "./App.vue";

import vuetify from "./vuetify";
import "vuetify/dist/vuetify.min.css";

import store from "./store";

import router from "./router";

import EN from "./locale/en.json"
import FA from "./locale/fa.json"

Vue.use(VueI18n);

Vue.config.productionTip = false;

const i18n = new VueI18n({
    locale: "EN",
    messages: {
        EN: EN,
        FA: FA
    }
});

new Vue({
    vuetify,
    store,
    router,
    i18n,
    render: (h) => h(App),
}).$mount("#app");
