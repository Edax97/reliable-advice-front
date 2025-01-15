import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'root-path',
            redirect: '/dashboard'
        },
        {
            path: '/profile/:handle',
            name: 'profile-posts',
            component: () => import('../features/profile/profile-view.vue'),
        },
        {
            path: '/new-profile/:name/:items/:store',
            name: 'profile-discovered',
            component: () => import('../features/discover/discovered-user-view.vue')
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import('../features/leader-board/board-view.vue')
        },
        {
            path: '/discover',
            name: 'discover-profile',
            component: () => import('../features/discover/discover-user.vue'),
        }
    ],
})

export default router
