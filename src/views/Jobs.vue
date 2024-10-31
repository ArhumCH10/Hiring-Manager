<!-- src/views/Jobs.vue -->
<template>
    <div class="p-4 lg:px-8">
      <div class="flex flex-col lg:flex-row justify-between items-center">
        <JobHeader />
        <div class="mt-4 lg:mt-0">
          <CreateJobButton />
        </div>
      </div>
  
      <!-- Job Search Component -->
      <JobSearch />
  
      <!-- Job List Component -->
      <JobList />
    </div>
  </template>
  
  <script>
  import JobHeader from '../components/JobHeader.vue'
  import CreateJobButton from '../components/CreateJobButton.vue'
  import JobSearch from '../components/JobSearch.vue'
  import JobList from '../components/JobList.vue'
  
  export default {
    name: "Jobs",
    components: {
      JobHeader,
      CreateJobButton,
      JobSearch,
      JobList
    }
  }
  </script>  