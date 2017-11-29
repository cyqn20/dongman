<template>
	<div>
		<header>
			<div class="header">
				<div class="logo">
					<!--<a href="" class="logo-btn"></a>-->
					<router-link to="/home" tag="a" class="logo-btn"></router-link>
				</div>
				<div class="form-ctn">
						<input type="text" name="search-bar" class="search-bar border-box" placeholder="请输入漫画名/作者名">
						<span class="cancel-btn none"></span>
					</div>
					<a href="javascript:;" class="search-btn">
						<i>搜索</i>
					</a>
					
			</div>
		</header>
		<div class="hotsearch clear">
					<h2 class="hot-title">热门搜索</h2>
					<div class="hot-content">
						<ul  v-for="data in title">	
							<li>{{data.title}}</li>
						</ul>
					</div>
				</div>
	</div>
</template>

<script>
		import axios from "axios";
	import router from "@/router"
	export default {

		data() {
			return {
				title:[]
				
			}
		},
		mounted() {
			axios.get(`/dacu_app/app/?c=MainRecommend&a=get_search_recommend&userid=0&h5_agent=%5B%222.9.3%22%2C%22iOS%22%2C%229.1%22%2C%22iPhone%22%2C%2241d196bbafe316b8f0b7589d0c6e4eff%22%2C%22h5_web%22%2C1%2C%22d5c2243db0c4a2102i9i4h62abc25969a50e92%22%5D&ui=0&ui_id=0&_=1510996563382`).then(res => {
				console.log(res.data.data)
				//
				this.title=res.data.data

			})
			
			
			
		},
		
	}
</script>

<style lang="scss" scoped>
header {
		width: 100%;
		height: 0.6rem;
		background: #fff;
		left: 0;
		top:0;
		position: fixed;
		z-index: 10;
		
	}
	.form-ctn {
    width: 1rem;
    height: 0.4rem;
    position: absolute;
    margin-top: -90px;
    left: 50%;
    top: 0.2rem;
}
.search-bar {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 1px solid #e4e4e4;
    background: #eeeeee;
    padding-right: 0.4rem;
    padding-left: 0.4rem;
    color: #333333;
    font-size: 0.14rem;
    margin-left: -90px;
}
	
	.seah-btn {
		background: url(../../img/seach.png);
		display: block;
		width: 0.34rem;
		height: 0.27rem;
		float: right;
		margin-top: 19px;
		margin-right: 20px;
	}
	
	
.hotsearch{
	margin-top: 0.6rem;
	padding-left: 0.2rem;
	background: #fff;
}
	.hot-title{
    margin-bottom: 0.5rem;
    color: #333333;
    font-size: 0.16rem;
	}
	li{
		float: left;
    color: #333333;
    font-size: 0.16rem;
    margin-right: 0.2rem;
    margin-bottom: 0.6rem;
	}
.logo-btn {
		background: url(../../img/back.png);
		display: block;
		width: 0.2rem;
		height: 0.24rem;
		float: left;
		margin-top: 0.19rem;
		margin-left: 0.1rem;
	}
	.search-btn {
    position: absolute;
    color: #333;
    right: 0.4rem;
     font-size: 0.12rem;
    top: 0.24rem;
}
</style>