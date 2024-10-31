<!-- src/App.vue -->
<template>
  <div>
    <nav class="p-4 bg-gray-800 text-white">
      <router-link to="/jobs">Jobs</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>
