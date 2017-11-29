<template>
	<div>
		<section>
			<div class="main">
				<ul>
					<li v-for="data in looplist" class="morelist clear" @click="handleClick(data.bookid)">
						<div class="more-img">
							<img :src="data.thumb">
						</div>
						<div class="wen">
							<p class="title over">{{data.title}}</p>
							<p class="author over">{{data.author}}</p>
							<div class="zhu over">{{data.description}}</div>
						</div>
					</li>
				</ul>
			</div>
		</section>

	</div>
</template>

<script>
	import axios from "axios";
	import router from "@/router";
	export default {
		name: 'more',
		data() {
			return {
				looplist: [],
				loading: false, //控制无限滚动组件 是否禁用
				current: 1, //表示第几页数据
				total: 0,
				text: "正在加载数据中..."
			}
		},

		mounted() {
			console.log(this.$route.query.id);
			if(this.$route.query.id==1){
				// axios 是一个http 请求的库， 基于promsie 封装的
			axios.get("/dacu_app/app/?c=MainRank&a=get_label_rank&label=0&get_type=0&userid=0&start=0&home=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C1%2C%22d5c2243db0c4a2102i9i4h62abc25969a50e92%22%5D&ui=0&ui_id=0&_=1510820420588", {

			}).then(res => {
				console.log(res.data.data.data);
				this.looplist = res.data.data.data;
				this.total = res.data.data.end;

			})

			}else 	if(this.$route.query.id==2){
				// axios 是一个http 请求的库， 基于promsie 封装的
			axios.get("/dacu_app/app/?c=MainRecommend&a=get_main_recommend_list&userid=0&type=1&start=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C2%2C%2227bbea61d34a0c672i9i4h93e69a278187396f%22%5D&ui=0&ui_id=0&_=1510820071819", {

			}).then(res => {
				console.log(res.data.data);
				this.looplist = res.data.data.area_data;
				this.total = res.data.data.end;

			})

			}else 	if(this.$route.query.id==3){
				// axios 是一个http 请求的库， 基于promsie 封装的
			axios.get("/dacu_app/app/?c=MainRecommend&a=get_main_recommend_list&userid=0&type=2&start=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C1%2C%22d5c2243db0c4a2102i9i4h62abc25969a50e92%22%5D&ui=0&ui_id=0&_=1510820132003", {

			}).then(res => {
				console.log(res.data.data);
				this.looplist = res.data.data.area_data;
				this.total = res.data.data.end;

			})

			}else 	if(this.$route.query.id==4){
				// axios 是一个http 请求的库， 基于promsie 封装的
			axios.get("/dacu_app/app/?c=MainRecommend&a=get_main_recommend_list&userid=0&type=3&start=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C1%2C%22d5c2243db0c4a2102i9i4h62abc25969a50e92%22%5D&ui=0&ui_id=0&_=1510820174573", {

			}).then(res => {
				console.log(res.data.data);
				this.looplist = res.data.data.area_data;
				this.total = res.data.data.end;

			})

			}
		
		},
		methods: {
			handleClick(id) {
				console.log(id);
				router.push(`/detail?id=${id}`)

			}

		}
	}
</script>

<style lang="scss" scoped>
	section {
		margin-top: 0.6rem;
		display: flex;
	}
	
	.main {
	ul{ width: 100%;}
		.more-img {
			width: 1.2rem;
			height: 1.4rem;
			border: 1px solid #E4E4E4;
			border-radius: 8px;
			overflow: hidden;
			margin-top: 0.24rem;
			background: #FFFFFF;
			float: left;
		}
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	.wen {
		float: right;
		width: 1.8rem;
		padding: 0.24rem 0.24rem 0.36rem;
		.title {
			width: 1.8rem;
			height: 0.34rem;
			line-height: 0.34rem;
			font-size: 0.2rem;
			color: #333333;
			font-weight: bold;
		}
		.author {
			font-size: 0.16rem;
			color: #333333;
		}
		.zhu {
			font-size: 0.14rem;
			color: #333333;
			line-height: 0.28rem;
			height: 0.52rem;
		}
	}
	
	.morelist {
		height: 1.8rem;
		border: 1px solid #E4E4E4;
		border-radius: 8px;
		overflow: hidden;
		margin-top: 0.24rem;
		background: #FFFFFF;
		margin-left: 0.1rem;
	}
</style>