import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import '@ionic/core/css/core.css';
import '@ionic/core/css/ionic.bundle.css';
import routes from './routes';

import IonicVue from '@ionic/vue';

Vue.config.productionTip = false;

Vue.use(IonicVue);
Vue.use(VueRouter);

const router = new VueRouter({routes});

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');