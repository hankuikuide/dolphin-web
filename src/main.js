import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'lib-flexible'


Vue.config.productionTip = false

// import Vant from 'vant';
// import 'vant/lib/index.css';
// Vue.use(Vant);

import { Button, Icon,Tabbar, TabbarItem,NavBar } from 'vant'
import { Swipe, SwipeItem } from 'vant';
import { Grid, GridItem } from 'vant';
import { Image as VanImage } from 'vant';

Vue.use(VanImage);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Swipe);
Vue.use(SwipeItem)
Vue.use(Button).use(Icon).use(Tabbar).use(TabbarItem).use(NavBar);
Vue.use(NavBar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
