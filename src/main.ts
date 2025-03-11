import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import router from '@/router';
import i18n from '@/i18n';

import PrimeVue from 'primevue/config';

// темы
import Aura from '@primeuix/themes/aura';
import Lara from '@primeuix/themes/lara';
import Material from '@primeuix/themes/material';
import Nora from '@primeuix/themes/nora';

// остальной primevue
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import Button from 'primevue/button';

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);

app.mount('#app');