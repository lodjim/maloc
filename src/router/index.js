import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from "../views/LoginView.vue"
import DiagnosticView from "../views/DiagnosticView.vue"
import AnalysisView from '../views/AnalysisView.vue'
import IndexView from "../views/IndexView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component:IndexView 
    },
    {
      path:"/home",
      name:"home",
      component:HomeView
    },
    {
      path:"/login",
      name:"login",
      component:LoginView
    },
    {
    path:"/diagnostic",
    name:"diagnostic",
    component:DiagnosticView
    },
    {
      path:"/analysis",
      name:"analysis",
      component:AnalysisView
    }
 ]
})

export default router
