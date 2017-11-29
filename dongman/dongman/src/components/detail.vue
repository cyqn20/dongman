<template>
	<div>	
		<section>
			<div class="m-top clear">
				<div class="m-left ">
					<img :src="manfo" />
				</div>
				<div class="m-right ">
					<p class="title">{{title}}</p>
					<p class="author over">{{author}}</p>
					<p class="content">{{content}}</p>
					<div class="read">
						<a href="">开始阅读</a>
					</div>
				</div>
				</div>
			
			<div class="m-bot">
				<ul>
					<router-link tag="li" to="/detail/zhangjie" activeClass="active">章节</router-link>
					<router-link tag="li" to="/detail/pinglun" activeClass="active">评论</router-link>
				</ul>
			</div>
			    
		</section>
	
		 <router-view></router-view>
	</div>
</template>

<script>
	import axios from "axios";
	import router from "@/router"
	export default {

		data() {
			return {
				filminfo: null,
				manfo: "",
				title: "",
				author: "",
				content: "",
				
			}
		},
		mounted() {
			
			this.ids=this.$route.query.id;
			axios.get(`/dacu_app/app/?c=BookDetail&a=get_book_info&id=${this.$route.query.id}&userid=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C2%2C%2227bbea61d34a0c672i9i4h93e69a278187396f%22%5D&ui=0&ui_id=0&_=1510734874268`).then(res => {
				console.log(res.data.data)
				//
				this.manfo = res.data.data.thumb
				this.title = res.data.data.title
				this.author = res.data.data.author
				this.content = res.data.data.description
			    this.$store.commit("title",this.title);

			})
			
			
			
		},
		
	}
</script>

<style lang="scss" scoped>
	section {
		margin-top: 0.6rem;
	}
	
	.m-left {
		overflow: hidden;
		float: left;
		width: 1.6rem;
		height: 2rem;
		border-radius: .08rem;
		box-shadow: 0 0 10px rgba(0, 0, 0, .2);
		background-color: #fff;
		float: left;
		img {
			width: 100%;
			height: 100%;
		}
	}
	
	.m-top {
		background: #fff;
		width: 100%;
		height: 2rem;
	}
	
	.m-right {
		float: left;
		width: 1.9rem;
		height: 2rem;
		margin-left: 0.19rem;
		.title {
			margin-top: 0.1rem;
			font-size: .28rem;
			width: 2rem;
			height: .3rem;
			line-height: .32rem;
		}
		.author {
			margin-top: 0.1rem;
			font-size: 0.16rem;
			color: #333333;
		}
		.content {
			font-size: 0.14rem;
			color: #333333;
			line-height: 0.28rem;
			height: 0.9rem;
			overflow: hidden;
			text-overflow: ellipsis;
		}
		.read {
			text-align: center;
			bottom: .06rem;
			width: 1rem;
			height: 0.4rem;
			line-height: .74rem;
			border-radius: .08rem;
			background: #ffb600;
			a {
				position: absolute;
				font-size: 0.15rem;
				margin-top: -20px;
				margin-left: -30px;
				color: #fff;
			}
		}
	}
	.m-bot{
		ul{
			display: flex;
			background: #fff;

			li{
				list-style: none;
				flex:1;
				height: 40px;
				line-height: 40px;
				text-align: center;
				font-size: 0.2rem;
			}
		}
	}
	.active{
		color: #ffb600;
	}
</style>