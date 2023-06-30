import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [{
		path: '/',
		redirect: '/home/home2',
	},
	{
		path: '/home/',
		name: 'home2',
		component: HomeView
	},
	{
		path: '/about/',
		name: 'about2',
		component: () => import('../views/AboutView.vue')
	},
]

const router = new VueRouter({
	base: '/',
	mode: 'history',
	routes,
})

export default router
