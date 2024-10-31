<!-- src/components/JobHeader.vue -->
<template>
    <div class="flex flex-col lg:flex-row justify-between items-center">
      <div>
        <h1 class="text-2xl font-bold">Jobs Opening</h1>
        <div class="flex gap-4 mt-2 text-sm">
          <span class="flex items-center gap-1 text-gray-700">
            <span class="w-2 h-2 rounded-full bg-green-500"></span> Open 3
          </span>
          <span class="flex items-center gap-1 text-gray-700">
            <span class="w-2 h-2 rounded-full bg-yellow-500"></span> Hold 8
          </span>
          <span class="flex items-center gap-1 text-gray-700">
            <span class="w-2 h-2 rounded-full bg-red-500"></span> Close 5
          </span>
          <span class="flex items-center gap-1 text-gray-700">
            <span class="w-2 h-2 rounded-full bg-gray-500"></span> Draft 5
          </span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "JobHeader",
  }
  </script>
  