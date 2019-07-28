import Home from './pages/Home/Home.vue';
import Register from './pages/Register/Register.vue';
import Login from './pages/Login/Login.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/register', component: Register },
    { path: '/login', component: Login },
];

export default routes;