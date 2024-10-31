// src/router/index.js
import { createRouter, createWebHistory } from "vue-router";
import Jobs from "../views/Jobs.vue";

const routes = [{ path: "/jobs", name: "Jobs", component: Jobs }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
