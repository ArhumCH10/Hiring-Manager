<!-- src/components/JobSearch.vue -->
<template>
    <div class="flex flex-col md:flex-row gap-4 mt-4">
      <!-- Search Box -->
      <div class="flex items-center bg-white border rounded-lg p-2 shadow-sm w-full md:w-auto">
        <span class="material-icons-outlined text-gray-400">search</span>
        <input
          type="text"
          placeholder="Search Job"
          class="bg-transparent outline-none ml-2 placeholder-gray-400 text-sm w-full"
        />
      </div>
  
      <!-- Filter Dropdowns -->
      <div class="flex flex-wrap gap-4">
        <!-- Categories Filter -->
        <div class="flex items-center bg-white border rounded-lg p-2 shadow-sm cursor-pointer">
          <span class="material-icons-outlined text-gray-400">water_drop</span>
          <span class="ml-2 text-sm">All Categories</span>
          <span class="material-icons-outlined text-gray-400 ml-1">expand_more</span>
        </div>
  
        <!-- Status Filter -->
        <div class="flex items-center bg-white border rounded-lg p-2 shadow-sm cursor-pointer">
          <span class="material-icons-outlined text-gray-400">insights</span>
          <span class="ml-2 text-sm">All Status</span>
          <span class="material-icons-outlined text-gray-400 ml-1">expand_more</span>
        </div>
  
        <!-- Location Filter -->
        <div class="flex items-center bg-white border rounded-lg p-2 shadow-sm cursor-pointer">
          <span class="material-icons-outlined text-gray-400">location_on</span>
          <span class="ml-2 text-sm">All Location</span>
          <span class="material-icons-outlined text-gray-400 ml-1">expand_more</span>
        </div>
  
        <!-- Advanced Filter -->
        <div class="flex items-center bg-white border rounded-lg p-2 shadow-sm cursor-pointer">
          <span class="material-icons-outlined text-gray-400">filter_alt</span>
          <span class="ml-2 text-sm">Advance Filter</span>
          <span class="material-icons-outlined text-gray-400 ml-1">expand_more</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "JobSearch",
  }
  </script>
  