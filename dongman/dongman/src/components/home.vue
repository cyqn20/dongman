<template>
	<div>
		<router-view></router-view>
		<header>
			<div class="header">
				<div class="logo">
					<router-link to="/home" tag="a" class="logo-btn"></router-link>
					<router-link tag="a" to="/search" class="seah-btn"></router-link>
					
				</div>
			</div>
		</header>
		<section>
			<swipe class="my-swipe ">
				<swipe-item v-for="data in looplist">
					<div class="t-top" @click="handleClick(data.man_id)">
						<img :src="data.cover" />
					</div>

				</swipe-item>
			</swipe>

			<div class="title-ctn clear">
				<h2 class="titlelist">一周人气</h2>
				<h3 @click="oneclick" class="more-btn">更多</h3>
				<!--<router-link tag="h3" to="/card/more" class="more-btn"  id="more1">更多</router-link>-->
			</div>
			<div class="dd clear">
				<div class="coner clear">
					<div v-for="data in booklist" @click="handleClick(data.bookid)" class="t-top">
						<img :src="data.thumb" />
						<div class="wek-infor over">
							<p class="rank-number">{{data.rank_id}}</p>
							<div class="over">
								<p class="bookname over">{{data.title}}</p>
								<p class="writename over">{{data.author}}</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="title-ctn">
				<h2 class="titlelist">精挑细选</h2>
				<h3 @click="twoclick" class="more-btn">更多</h3>
				<!--<router-link tag="h3" to="/card/more" class="more-btn">更多</router-link>-->
			</div>
			<div class="main2">
				<dl v-for="data in tuijian" @click="handleClick(data.bookid)">
					<dd><img :src="data.thumb" /></dd>
					<dt class="title1 over">{{data.title}}</dt>
					<dt class="author over">{{data.author}}</dt>
				</dl>
			</div>
			<div class="title-ctn">
				<h2 class="titlelist">新作推荐</h2>
				<h3 @click="threeclick" class="more-btn">更多</h3>
				<!--<router-link tag="h3" to="/card/more" class="more-btn"  @click="oneclick()">更多</router-link>-->
			</div>
			<div class="main3">
				<dl v-for="data in tuijian2" @click="handleClick(data.bookid)">
					<dd><img :src="data.thumb" /></dd>
					<dt class="title1 over">{{data.title}}</dt>
					<dt class="author over">{{data.author}}</dt>
				</dl>
			</div>
			<div class="title-ctn">
				<h2 class="titlelist">刚刚更新</h2>
				<h3 @click="fourclick" class="more-btn">更多</h3>
				<!--<router-link tag="h3" to="/card/more" class="more-btn" >更多</router-link>-->
			</div>
			<div class="main3">
				<dl v-for="data in tuijian3" @click="handleClick(data.bookid)">
					<dd><img :src="data.thumb" /></dd>
					<dt class="title1 over">{{data.title}}</dt>
					<dt class="author over">{{data.author}}</dt>
				</dl>
			</div>

		</section>

	</div>

</template>

<script>
	import "vue-swipe/dist/vue-swipe.css"; //css 模块化 导入
	import { Swipe, SwipeItem } from 'vue-swipe';
	import router from "@/router";
	export default {

		name: 'home',
		data() {
			this.$router.replace('/home')
			return {
				looplist: [],
				booklist: [],
				tuijian: [],
				tuijian2: [],
				tuijian3: [],

			}
		},
		mounted() {

			fetch('/dacu_app/app/?c=MainRecommend&a=get_main_advertise_h5&type=0&h5_agent=%5B%222.9.3%22%2C%22Android%22%2C%226.0%22%2C%22HuaWei%22%2C%2203d931ca7165b467da16fb732a9e408b%22%2C%22h5_web%22%2C2%2C%2227bbea61d34a0c672a6h0h93e69a278187396f%22%5D&ui=0&ui_id=0&_=1510644407153').then(res => res.json()).then(res => {
				//				console.log(res);
				//				console.log(res.data.man_id);		
				this.looplist = res.data;
			})

			fetch('/dacu_app/app/?c=MainRank&a=get_label_rank&label=0&get_type=0&start=0&userid=0&home=1&h5_agent=%5B%222.9.3%22%2C%22Android%22%2C%226.0%22%2C%22HuaWei%22%2C%2203d931ca7165b467da16fb732a9e408b%22%2C%22h5_web%22%2C2%2C%2227bbea61d34a0c672a6h0h93e69a278187396f%22%5D&ui=0&ui_id=0&_=1510644407154').then(res => res.json()).then(res => {
				console.log(res);
				//console.log(res.data.bookid);
				this.booklist = res.data.data;
			})

			fetch('/dacu_app/app/?c=MainRecommend&a=get_main_recommend_area&userid=0&type_var=%5B1%2C2%2C3%5D&h5_agent=%5B%222.9.3%22%2C%22Android%22%2C%226.0%22%2C%22HuaWei%22%2C%2203d931ca7165b467da16fb732a9e408b%22%2C%22h5_web%22%2C2%2C%2227bbea61d34a0c672a6h0h93e69a278187396f%22%5D&ui=0&ui_id=0&_=1510663523124').then(res => res.json()).then(res => {
				console.log(res);
				this.tuijian = res.data[1].area_data;
				this.tuijian2 = res.data[2].area_data;
				this.tuijian3 = res.data[3].area_data;
			})

		},
		components: {
			swipe: Swipe,
			"swipe-item": SwipeItem
		},

		methods: {
			handleClick(id) {
				console.log(id);

				router.push(`/detail?id=${id}`)

			},
			oneclick() {
				router.push(`card/more?id=1`)
				//console.log(document.getElementById(id));
			},
			twoclick() {
				router.push(`card/more?id=2`)
				//console.log(document.getElementById(id));
			},
			threeclick() {
				router.push(`card/more?id=3`)
				//console.log(document.getElementById(id));
			},
			fourclick() {
				router.push(`card/more?id=4`)
				//console.log(document.getElementById(id));
			},

		}
	}
</script>
<style lang="scss" scoped>
.logo-btn {
		background: url(../../img/logo.png);
		display: block;
		width: 1.24rem;
		height: 0.24rem;
		float: left;
		margin-top: 0.19rem;
		margin-left: 0.1rem;
	}
	section {
		flex: 1;
	}
	
	.my-swipe {
		margin-top: 0.6rem;
		height: 2.2rem;
		width: 100%;
		img {
			width: 100%;
		}
	}
	
	.nowplaying {
		li {
			list-style: none;
			padding: 10px;
			img {
				width: 100%;
			}
		}
	}
	
	.title-ctn {
		height: 0.4rem;
		margin-top: 0.2rem;
		.titlelist {
			height: 0.4rem;
			width: 0.8rem;
			font-size: 0.2rem;
			font-weight: bold;
			color: #333333;
			margin: 0 0 0 0.24rem;
			float: left;
		}
		.more-btn {
			height: 0.34rem;
			width: 0.34rem;
			font-size: 0.16rem;
			color: #666666;
			margin: 0 0.24rem 0 0;
			float: right;
		}
	}
	
	.dd {
		width: 100%;
		overflow: auto;
	}
	
	.coner {
		width: 1250px;
		height: 1.7rem;
		overflow: hidden;
		img {
			width: 1rem;
			height: 1rem;
			border: 1px solid #e4e4e4;
			border-radius: 8px;
		}
		.t-top {
			width: 1.2rem;
			height: 1rem;
			margin-bottom: 0.2rem;
			display: inline-block;
		}
		.wek-infor {
			display: flex;
			width: 1rem;
			margin-left: -10px;
			.rank-number {
				font-size: 0.2rem;
				color: #f9c965;
				margin: 0.1rem 0.14rem 0.08rem;
			}
		}
		.over {
			.bookname {
				font-size: 0.14rem;
				color: #333333;
			}
			.writename {
				font-size: 0.12rem;
				color: #999999;
			}
		}
	}
	
	.cc {
		float: left;
		margin-right: 0.2rem;
	}
	
	
	.main2 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 0.26rem
	}
	
	.main2 dl {
		width: 47%;
		line-height: 0.38rem;
		background: #fff;
		margin: 0.05rem ;
	}
	.main3 {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		font-size: 0.26rem
	}
	
	.main3 dl {
		width: 30%;
		line-height: 0.38rem;
		background: #fff;
		margin: 0.05rem ;
	}
	
	.main2 img ,.main3 img{
		width: 100%
	}
	
	.title1 {
		font-size: 0.2rem;
		color: #333333;
	}
	
	.author {
		font-size: 0.15rem;
		color: #999999;
	}
	.border-box {
		box-sizing: border-box;
	}
</style>