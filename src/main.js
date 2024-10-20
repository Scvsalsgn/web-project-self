
// 引入 Bootstrap 的 CSS 文件
import 'bootstrap/dist/css/bootstrap.min.css';

// 如果需要 Bootstrap 的 JS 功能
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { createApp } from 'vue'
import App from './App.vue'

import router from './router'; // 确保导入了 router

createApp(App)
  .use(router) // 确保使用了 router
  .mount('#app');

// createApp(App).mount('#app')
