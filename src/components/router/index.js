import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {path:'/', name: 'contactList', component: () => import('../views/contactList.vue')},
    {path:'/contactEdit', name: 'contactEdit', component: () => import('../views/contactEdit.vue')},
    {path:'/contactDetail/:id/:nome/:telemovel/:email/:morada', name: 'contactDetail', component: () => import('../views/contactDetail.vue')},
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
