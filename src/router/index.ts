import { createRouter, createWebHistory } from 'vue-router'
import CalendarResourcePlan from '@/views/CalendarResourcePlan.vue'
import ResourceRegistry from '@/views/ResourceRegistry/ResourceRegistry.vue'
import ProjectsRegistry from  '@/views/ProjectsRegistry/ProjectsRegistry.vue'
import Applications from '@/views/Applications/ApplicationsMain.vue'
import Reports from '@/views/Reports/Reports.vue'
import Dashboard from '@/views/Dashboard/Dashboard.vue'
import Manual from '@/views/Manual/Manual.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/calendar-resource-plan',
      name: 'calendar-resource-plan',
      component: CalendarResourcePlan
    },
    {
      path: '/resource-registry',
      name: 'resource-registry',
      component: ResourceRegistry
    },
    {
      path: '/projects-registry',
      name: 'projects-registry',
      component: ProjectsRegistry
    },
    {
      path: '/applications',
      name: 'applications',
      component: Applications
    },
    {
      path: '/reports',
      name: 'reports',
      component: Reports
    },
    {
      path: '/dashbord',
      name: 'dashbord',
      component: Dashboard
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual
    }
   
  ],
})

export default router
