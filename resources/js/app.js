import './bootstrap';
import { createApp } from 'vue';
import * as VueRouter from "vue-router";
import WelcomePage from './PAGES/welcome-page.vue'

import App from './app.vue'
const routes = [
    {
        path: '/',
        name: 'WelcomePage',
        component: WelcomePage
    }
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
})
export default router;
const app = createApp(App);

app.use(router)
app.mount('#app')
