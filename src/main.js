
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import css from 'highlight.js/lib/languages/css';
import html from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/dark.css';

import 'tailwindcss/tailwind.css'


hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('css', css);
hljs.registerLanguage('html', html);

const app = createApp(App)

app.directive('highlight', function (el) {
    const codeall = el.querySelectorAll('pre code')
    codeall.forEach(el => {
        // then highlight each
        hljs.highlightElement(el);
    });
})



app.use(createPinia())
app.use(router)

app.mount('#app')
