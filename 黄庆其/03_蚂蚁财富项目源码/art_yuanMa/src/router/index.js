import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import userSetting from '../components/user/setting/setting.vue'
import optionalTemplate from "../components/optional/optionalTemplate.vue"
Vue.use(VueRouter)
// 解决Vue-Router升级导致的Uncaught(in promis) navigation guard问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
	if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
	return originalPush.call(this, location).catch(err => err)
}
const routes = [{
		path: '/',
		name: '/',
		meta: {
			ifShowTabbar: true
		},
		component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
	},
	{
		path: '/home',
		name: 'Home',
		meta: {
			ifShowTabbar: true
		},
		component: () => import( /* webpackChunkName: "about" */ '../views/Home.vue')
	},


	{
		path: '/optional',
		name: 'Optional',
		meta: {
			ifShowTabbar: true
		},
		component: () => import( /* webpackChunkName: "about" */ '../views/Optional.vue'),
		// children:[
		// 	{
		// 		path:'optionalTemplate',
		// 		name:'optionalTemplate',
		// 		component:() => import('../components/optional/optionalTemplate.vue'),

		// 	}
		// ]

	},
	// {
	// 	path: 'optionalTemplate',
	// 	name: 'optionalTemplate',
	// 	component: () => import('../components/optional/optionalTemplate.vue'),

	// },
	{
		path: '/community',
		name: 'Community',
		meta: {
			ifShowTabbar: true
		},
		component: () => import( /* webpackChunkName: "about" */ '../views/Community.vue'),
	},
	{
		path: '/user',
		name: 'User',
		meta: {
			ifShowTabbar: true
		},
		component: () => import( /* webpackChunkName: "about" */ '../views/User.vue'),

		// children:[
		// 	{
		// 		path: "fundGuarantee",
		// 		component: () => import('../components/user/fundGuarantee/fundGuarantee.vue'),
		// 	},
		// ]
	},
	{
		path: "/fundGuarantee",
		component: () => import('../components/user/fundGuarantee/fundGuarantee.vue'),
	},
	{
		path: "/setting",
		component: () => import('../components/user/setting/setting.vue'),
	},
	{
		path: "/safety",
		component: () => import('../components/user/setting/safety/safety.vue'),
	},
	{
		path: "/paySetting",
		component: () => import('../components/user/setting/paySetting/paySetting.vue')
	},
	{
		path: "/privacy",
		component: () => import('../components/user/setting/privacy/privacy.vue')
	},
	{
		path: "/currency",
		component: () => import('../components/user/setting/currency/currency.vue')
	},
	{
		// 关于页
		path: "/about",
		component: () => import('../components/user/setting/about/about.vue')
	},
	{
		// 余额
		path: "/balance",
		component: () => import('../components/home/balance/balance.vue')
	}

]

const router = new VueRouter({
	routes
})
//路由拦截（导航守卫：前置导航守卫和后置导航守卫）
// 三个参数
// to代表即将进入的路由
//form代表即将离开的路由
// next(),每一个导航守卫至少搭配一个next()
router.beforeEach((to, from, next) => {
	// console.log("to:",to)
	// console.log("from:",from)
	// next()
	let token = localStorage.getItem('token')
	if (to.path == '') {
		// 此时必须要有token
		if (token) {
			next(); //只针对去往的路由/User
		} else {
			// alert('请先登陆')
			Vue.prototype.$toast('请先登陆');
			setTimeout(() => {
				next("/Optional")
			}, 1000)
		}
		return;
	}
	next(); //适配所有路由
})

export default router
// this.$router.push({name:'/Home'})
// this.$router.push({path:'/Optional'})
// this.$router.push('/login')
