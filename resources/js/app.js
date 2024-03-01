import './bootstrap';
import '../css/app.css';

import {createApp, h} from 'vue';
import {createInertiaApp} from '@inertiajs/vue3';
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from '../../vendor/tightenco/ziggy/dist/vue.m';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

// Function to check screen width and page height
function checkScreenSize() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    const pageHeight = document.documentElement.scrollHeight || document.body.scrollHeight;

    return screenWidth < 200 || pageHeight < 400;
}
// window.addEventListener('resize', checkScreenSize);

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        if (!checkScreenSize()) {
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
