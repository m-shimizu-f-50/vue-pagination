import Vue from "vue";
import Vuetify from "vuetify";
//import Vuetify from "vuetify/lib";
import "vuetify/dist/vuetify.min.css";
//import VueI18n from "vue-i18n";
import es from "vuetify/src/locale/es";

Vue.use(Vuetify);
//Vue.use(VueI18n);

const opts = {};

export default new Vuetify({
  lang: {
    locales: { es },
    current: "es"
  },
  icons: {
    iconfont: "mdiSvg" // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  }
});
