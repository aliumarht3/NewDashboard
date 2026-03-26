import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

// Import the views we are about to create
import MachineTelemetryView from './views/MachineTelemetryView.vue'
import ErrorLogsView from './views/ErrorLogsView.vue'

// Set up the routes
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: MachineTelemetryView },
    { path: '/errors', component: ErrorLogsView }
  ]
})

// Start the app with the router attached
createApp(App).use(router).mount('#app')