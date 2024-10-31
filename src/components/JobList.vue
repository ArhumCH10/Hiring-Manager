<template>
    <div class="grid gap-6 mt-6 md:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="(job, index) in jobs"
        :key="job.id"
        class="bg-white border rounded-lg p-4 shadow-sm relative"
        ref="jobCard"
      >
        <!-- Top Row with Status Badge, Category, and Menu Icon -->
        <div class="flex items-center justify-between">
          <!-- Status Badge -->
          <div
            class="px-3 py-1 rounded-full text-xs font-semibold"
            :class="{
              'bg-green-100 text-green-700': job.status === 'Open',
              'bg-yellow-100 text-yellow-700': job.status === 'Hold',
              'bg-gray-200 text-gray-700': job.status === 'Draft'
            }"
          >
            {{ job.status }}
            
          </div>

          <div class="text-sm text-gray-700">{{ job.category }}</div>
  
          <!-- Category Label and Three-Dots Menu -->
          <div class="flex items-start space-x-2">
  
            <!-- Three-Dots Menu Icon -->
            <div class="relative">
              <button
                class="text-gray-500 hover:text-gray-700 focus:outline-none"
                @click.stop="toggleMenu(index)"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="5" cy="10" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="15" cy="10" r="1.5" />
                </svg>
              </button>
  
              <!-- Dropdown Menu -->
              <div
                v-if="isMenuOpen === index"
                class="absolute right-0 mt-2 w-24 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                @click.stop
              >
                <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" @click="editJob(job)">Edit</button>
                <button class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left" @click="deleteJob(job)">Delete</button>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Job Title -->
        <h2 class="font-semibold text-lg mt-4">{{ job.title }}</h2>
  
        <!-- Job Type, Location, and Mode -->
        <div class="text-sm text-gray-600 flex items-center space-x-2 mt-2">
          <span>{{ job.type }}</span>
          <span>&#8226;</span>
          <span>{{ job.location }}</span>
          <span>&#8226;</span>
          <span>{{ job.mode }}</span>
        </div>
  
        <!-- Conditional Content for Draft Status -->
        <div v-if="job.status === 'Draft'" class="text-center mt-6">
          <img src="../assets/draft.png" alt="Draft Icon" class="mx-auto mb-2 w-16 opacity-50" />
          <p class="text-gray-500">You haven't completed the job details</p>
          <button class="text-blue-600 font-semibold mt-2">Continue Edit</button>
        </div>
  
        <!-- Content for Non-Draft Jobs -->
        <div v-else>
          <div class="flex justify-between bg-gray-100 p-2 rounded-lg mt-4">
            <div class="text-center">
              <p class="font-semibold">{{ job.candidatesApplied }}</p>
              <p class="text-xs text-gray-500">Candidates Applied</p>
            </div>
            <div class="text-center">
              <p class="font-semibold">{{ job.completedInterview }}</p>
              <p class="text-xs text-gray-500">Completed Interview</p>
            </div>
          </div>
  
          <!-- Job Dates and Days Remaining -->
          <div class="mt-4">
            <p class="text-xs text-gray-500">
              Posted at {{ job.postedDate }} - Close at {{ job.closeDate }}
            </p>
            <div class="relative h-2 mt-2 rounded-full bg-gray-200 overflow-hidden">
              <div
                :style="{ width: calculateProgress(job) + '%' }"
                class="h-full bg-green-500 transition-all duration-500 ease-in-out"
              ></div>
            </div>
            <p class="text-xs font-semibold text-green-600 mt-1">
              {{ job.daysToGo }} Days to go
            </p>
          </div>
  
          <!-- Created By and View Details -->
          <div class="flex justify-between items-center mt-4 text-sm">
            <p>Created by <span class="text-blue-600">{{ job.createdBy }}</span></p>
            <button class="text-blue-600 font-semibold">View details</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import jobsData from '../jobs.json';
  
  export default {
    name: "JobList",
    data() {
      return {
        jobs: jobsData,
        isMenuOpen: null, // Track which job's menu is open
      };
    },
    methods: {
      calculateProgress(job) {
        const postedDate = new Date(job.postedDate);
        const closeDate = new Date(job.closeDate);
        const today = new Date();
        const totalDays = (closeDate - postedDate) / (1000 * 60 * 60 * 24);
        const daysPassed = (today - postedDate) / (1000 * 60 * 60 * 24);
        return Math.max(0, Math.min(100, (daysPassed / totalDays) * 100));
      },
      toggleMenu(index) {
        this.isMenuOpen = this.isMenuOpen === index ? null : index;
      },
      editJob(job) {
        console.log("Edit job:", job);
      },
      deleteJob(job) {
        console.log("Delete job:", job);
      },
      handleClickOutside(event) {
        const jobCards = this.$refs.jobCard;
        const clickedInside = jobCards.some((card, index) => {
          return card.contains(event.target) && this.isMenuOpen === index;
        });
        
        if (!clickedInside) {
          this.isMenuOpen = null;
        }
      },
    },
    mounted() {
      document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
      document.removeEventListener('click', this.handleClickOutside);
    }
  };
  </script>  