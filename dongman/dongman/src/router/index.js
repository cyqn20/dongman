import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/home"; //@ 是 src 文件夹的绝对路径 ，在webpack.base.conf.js
import Card from "@/components/card";
import more from "@/components/more";
import detail from "@/components/detail";
import zhangjie from "@/components/zhangjie";
import pinglun from "@/components/pinglun";
import search from "@/components/search";
Vue.use(Router) //安装路由功能

export default new Router({
	mode: "hash", // mode 支持两个值 一个hash ，一个history
	routes: [
	{
			path: "/home",
			component: home,
		},
		{
			path: "/search",
			component: search,
		},
		{
//			path: "/detail",
			path: "/detail",
			component: detail,
	     children: [
				{
					path: "zhangjie",
					component: zhangjie,
				},
        {
					path: "pinglun",
					component: pinglun,
				},
				{
					path:"/",
                redirect:"/detail/zhangjie"
				}
			]
		},
		{
			path: "/card",
			component: Card,
			children: [{
					path: "more",
					component: more,
				}

			]

		},
//	{
//			path: "/zhangjie",
//			component: zhangjie,
//		},
		{
			path: "*", //任何路径都会匹配到/home 组件中
			redirect: "/home"
		}

	]
}
)