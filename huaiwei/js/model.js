//定义模块


define(['jquery'],function($){
	
	return {
		//图片列表
		imglist:(function(d){
			$.ajax({
				url:'http://localhost/huaiwei/mysql.php?__hbt=1507897719977',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=0;i<4;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.contect-img').html($html);
			})
		})(),
			imglist:(function(d){
			$.ajax({
				url:'http://localhost/huaiwei/mysql.php?__hbt=1507897719977',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=0;i<8;i++){
					$html+='<li>'+'<a class="tumb">'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</a>'+'</li>'
				}
				$html+='</ul>'
				$('.main2-concent').html($html);
			})
		})(),
		imglist:(function(d){
			$.ajax({
				url:'http://localhost/huaiwei/mysql.php?__hbt=1507897719977',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=0;i<16;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.good-coding').html($html);
			})
		})(),
		imglist:(function(d){
			$.ajax({
				url:'http://localhost/huaiwei/mysql.php?__hbt=1507897719977',
				dataType:'json'
			}).done(function(d){
				var $html='';
				for(var i=0;i<4;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
				}
				
				$('.img-enjoy').html($html);
			})
		})(),
		imglist:(function(d){
			$.ajax({
				url:'http://localhost/huaiwei/mysql.php?__hbt=1507897719977',
				dataType:'json'
			}).done(function(d){
				var $html='<ul>';
				for(var i=0;i<10;i++){
					$html+='<li>'+'<img src="'+d[i].url+'" />'
					+'<h3 class="grid-title">'+d[i].title+'</h3>'
					+'<p class="grid-price">'+d[i].price+'</p>'
					+'</li>'
				}
				$html+='</ul>'
				$('.main5-concent').html($html);
			})
		})(),
		
	
	}
});
//第一次导航显示
$('.te' ).change().hover(function(){
	$('.b').show()
},function(){
	$('.b').hide()
	
})
//第二次导航显示
$('.sea' ).find('.wen').hover(function(){
	$('.daohang').show()
},function(){
	$('.daohang').hide()
	
})
//咨询显示
$('.shu' ).find('i').hover(function(){
	$(this).addClass('bg1').find('a').css({'background-color':'#000'})
	$('.zixin1').show()
},function(){
	$('.zixin1').hide()
	
})
//添加下划线和字体变色
$('.naver' ).find('li').hover(function(){
	$(this).addClass('bg1').find('a').css({'color':'#ca151d','border-bottom':'2px solid #ca151d'})
},function(){
	$(this).removeClass('bg1').find('a').css({'color':'#666','border':'none'})
})
$('.hover-list' ).find('li').hover(function(){
	$(this).addClass('bo').find('a').css({'color':'#ca151d'})
},function(){
	$(this).removeClass('bo').find('a').css({'color':'#666'})
})
//1.通过scroll事件，控制右侧的楼梯显示与隐藏
	$(window).scroll(function(){
		//获取scrolltop值
		var $scrolltop=$(window).scrollTop();
		if($scrolltop>=800){
			$('.dd').fadeIn(500);//fadeIn();
		}else{
			$('.dd').fadeOut(500);
		}
		if($scrolltop>=1780){
			$('.event-float').fadeIn(500);//fadeIn();
		}else{
			$('.event-float').fadeOut(500);
		}
		//4.触发滚轮，让对应的楼梯，添加类名，进行切换标注。
			$('.hover-list li').each(function(){
			var $top=$('.main5').eq($(this).index()).offset().top+400;
			if($top>$scrolltop){
				$('.hover-list li').removeClass('hover');
				$('.hover-list li').eq($(this).index()).addClass('hover');
				return false;
			}
		})
	});
	//2.点击楼梯，获取对应楼层的top值下面的scrollTop
	$('.hover-list li').on('click',function(){
		$(this).addClass('hover').siblings().removeClass('hover');
		var $index=$(this).index();//当前的索引
		var $top=$('.main5').eq($index).offset().top;//当前楼梯对应的楼层的top值
		$('html,body').animate({//赋值 
			//document.documentElement.scrollTop || document.body.scrollTop
			scrollTop:$top
		},200);
	})
	
//	//盒子的高度
//	$('.main5-concent').each(function(i,ele){
//		console.log($(this).index())
//		console.log(i)
//		console.log(ele)
//   console.log($(this).offset().top)//2085.2084690332413 2715.20849609375
//	})