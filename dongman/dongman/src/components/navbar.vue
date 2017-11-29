<template>
<div>
	<header>
			<div class="header">
				<div class="logo">
					<router-link to="/home" tag="a" class="logo-btn"></router-link>
					<span>{{$store.state.title}}</span>
					<router-link tag="a" to="/search" class="seah-btn"></router-link>
					
				</div>
			</div>
		</header>
</div>

</template>

<script>
export default {

  name: 'navbar',

  data () {
    return {

    }
  }
}
</script>
<style >
 header {
		width: 100%;
		height: 0.6rem;
		background: #fff;
		left: 0;
		top:0;
		position: fixed;
		z-index: 3;
		
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
	
	.logo-btn {
		background: url(../../img/back.png);
		display: block;
		width: 0.2rem;
		height: 0.24rem;
		float: left;
		margin-top: 0.19rem;
		margin-left: 0.1rem;
	}
	span{
		font-size:0.25rem;
		position: absolute;
		top:0.13rem;
		margin-left: 0.2rem;
	}
</style>