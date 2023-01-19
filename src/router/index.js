import { createRouter, createWebHistory } from 'vue-router'
import Create from '../components/Create.vue'
import Update from '../components/Update.vue'
import List from '../components/List.vue'

//Rutas
const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/create',
    name: 'Create',
    component: Create
  },
  {
    path: '/update/:id',
    name: 'Update',
    component: Update
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
