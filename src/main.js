import Vue from 'vue'
import router from './router'
import 'mint-ui/lib/style.css'
import { Swipe, SwipeItem } from 'mint-ui';

import App from './App.vue'

Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

// 引入Header
import Header from './components/Header/Header.vue'
// 引入Header
import Footer from './components/Footer/Footer.vue'
//引入purchase
import Purchase from './components/Purchase/Purchase.vue'
Vue.config.productionTip = false

// 注册成全局组件(公共组件)
Vue.component(Header.name, Header)
// 注册成全局组件(公共组件)
Vue.component(Footer.name, Footer)
// 注册成全局组件(公共组件)
Vue.component(Purchase.name, Purchase)


new Vue({
	el: '#app',
	components: {
		App
	},
	template: '<App/>',
	router
})