import Vue from 'vue'
import App from './App'
import "./common/font/iconfont.css"
import devConfig from './config.js'
import $ajax from "./tools/ajax.js";
import WXrequest from "./tools/wx_request.js"

Vue.prototype.$wxhttp = WXrequest

Vue.prototype.$ajax = $ajax;
Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
