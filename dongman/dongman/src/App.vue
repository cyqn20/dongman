<template>
	<div>
		<navbar>
		</navbar>
		<router-view></router-view>
		
	</div>

</template>

<script>
	import navbar from "@/components/navbar";

	export default {
		data() {
			return {

			}
		},
		mounted() {

		},

		components: {
			navbar,

		},

		methods: {

		}
	}
</script>

<style>
	* {
		margin: 0px;
		padding: 0px;
	}
	
	html,
	body {
		width: 100%;
		height: 100%;
		font-size: 100px;
	
	background: #f5f5f5;
	}
	li{
	list-style: none;}
	a{
	text-decoration: none;}
	/*文本溢出出现省略号*/
.over{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}

/*图片垂直对齐的竖杠*/
.valign:after{content:"";display:inline-block;width:0;height:100%;vertical-align:middle;}
.valign img{vertical-align:middle;}


/*万能清除法*/
.clear{zoom:1;}/*清除ie的浮动*/
.clear:before{content:"";display:table;}
.clear:after{content:"";clear:both;display:block;}
.clearfix:after {
    content: '';
    clear: both !important;
    display: block;
    width: 0;
    height: 0;
    visibility: hidden;
}
</style>