import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import './styles/index.scss'
import Icon from 'base/mm-icon/mm-icon'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false;
// icon 组件
Vue.component(Icon.name, Icon)

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: require('./assets/img/default.png')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
