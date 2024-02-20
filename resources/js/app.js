import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

let Render = checkScreenSize(); // Set to false to render ErrorPage
window.addEventListener('resize', checkScreenSize);
// Function to check screen width and page height
function checkScreenSize() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    return screenWidth < 500 || pageHeight < 600;
}

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        if (Render) {
            return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
        } else {
            return import('./Pages/ErrorPage.vue');
        }
    },
    setup({ el, App, props, plugin }) {
        return createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
