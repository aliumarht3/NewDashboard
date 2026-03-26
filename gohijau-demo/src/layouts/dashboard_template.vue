<template>
  <div class="min-h-screen flex flex-col md:flex-row">
    <aside class="w-full md:w-64 bg-green-800 text-white p-6 shadow-xl">
      <h2 class="text-2xl font-bold mb-8">GoHijau Demo</h2>
      <nav class="space-y-4">
        <router-link to="/" class="block hover:text-green-300">Telemetry</router-link>
        <router-link to="/errors" class="block hover:text-green-300">Error Logs</router-link>
      </nav>
    </aside>
    
    <main class="flex-1 p-8">
      <slot></slot>
    </main>
  </div>
</template>