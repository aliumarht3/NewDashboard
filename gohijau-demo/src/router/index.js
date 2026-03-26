{
      path: '/telemetry',
      name: 'MachineTelemetry',
      component: () => import('../views/MachineTelemetryView.vue'),
      meta: { title: 'Telemetry - GoHijau', requiresAuth: true }
    },
    {
      path: '/error-logs',
      name: 'ErrorLogs',
      component: () => import('../views/ErrorLogsView.vue'),
      meta: { title: 'Error Logs - GoHijau', requiresAuth: true }
    },