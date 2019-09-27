$(function(){
	/*메인메뉴*/
	$("#gnb>li, .pan").mouseover(function(){
		$("#gnb>li").find(".submenu").stop().slideDown();
		$(".pan").stop().slideDown();
	})
	$("#gnb>li, .pan").mouseout(function(){
		$("#gnb>li").find(".submenu").stop().slideUp();
		$(".pan").stop().slideUp();
	})
	/*이미지슬라이드*/
		var num=0;
		var pos=0;
	setInterval(function(){
		num++
		pos=num*-1200;
		$(".imgSlide").animate({left:pos},700);
		if(num==3){
			pos=num=0;
		$(".imgSlide").animate({left:pos},0);	
		}
		
	},2000);

	/*베스트5 hover시*/	
	$(".bestbox_child, .best_mid").mouseover(function(){
		$(this).find(".bestbox_layer").show();
		$(this).find(".bestbox_mid_layer").show();
		 
	});
	$(".bestbox_child, .best_mid").mouseout(function(){
		$(this).find(".bestbox_layer").hide();
		$(this).find(".bestbox_mid_layer" ).hide();
		
	});

	/*doctor mouseover시*/
$(".doctor div").mouseover(function(){
		$(this).filter(".doctor1").fadeIn();
		$(this).find(".bestbox_mid_layer").show();
		 
	});
	$(".bestbox_child, .best_mid").mouseout(function(){
		$(this).find(".bestbox_layer").hide();
		$(this).find(".bestbox_mid_layer" ).hide();
		
	});

	/*---프로모션 아이콘---*/
	$(".ad_icon li img").each(function(index){
						$(this).attr('alt', index).attr('class', 'icon0'+(index));
					});
		$('.ad_icon img').click(function(){
							n=parseInt($(this).attr('alt'));
							$('.ad').animate({left:-1200*n});
							$('.ad_icon img').attr('src', 'images/ico_slider.png');
							$(this).attr('src', 'images/ico_slider_on.png');
						});
	/*베스트 리뷰_슬라이드*/
	var n=0;  
				
					//icon alt 속성 index
					$(".icon li img").each(function(index){
						$(this).attr('alt', index+1).attr('class', 'icon0'+(index+1));
					});
					$(".imgwrap li img").each(function(index){
						$(this).attr('alt', '베스트리뷰'+(index+1));
					});
					//기본 css스타일 변경
					$(".imgwrap").css({
						left:0
					});
					$(".icon li images:first").attr('src', 'images/ico_slider_on.png');
					
					$(".btn_next").click(function(){
						n++;
						console.log(n);
						if(n==9){
							$(".imgwrap").css({left:0});
							n=1; 
						}
						$(".imgwrap").stop().animate({left:-430*n})
						//icon
						$(".icon img").attr('src', 'images/ico_slider.png')
						$('.icon .icon0'+(n+1)).attr('src', 'images/ico_slider_on.png')
						if(n==8){
							$('.icon .icon01').attr('src', 'images/ico_slider_on.png')
						}
					});
					$('.btn_prev').click(function(){
						n--;
						if(n==-1){
							$('.imgwrap').css({left:-430*8})
							n=7
						}
						$('.imgwrap').stop().animate({left:-430*n})
						//icon
						if(n==0){
							$('.icon images:eq(7)').attr('src', 'images/ico_slider_on.png')
						}
						$('.icon images').attr('src', 'images/ico_slider.png')
						$('.icon images:eq('+(n)+')').attr('src', 'images/ico_slider_on.png')
					});
					
						$('.icon img').click(function(){
							n=parseInt($(this).attr('alt'));
							$('.imgwrap').animate({left:-430*n});
							$('.icon img').attr('src', 'images/ico_slider.png');
							$(this).attr('src', 'images/ico_slider_on.png');
						});
	/*베스트리뷰_hover시*/

	$(".imgwrap_child1").mouseover(function(){
		$(this).find("div").stop().animate({top:250}); 
	});
	$(".imgwrap_child1").mouseout(function(){
		$(this).find("div").stop().animate({top:500});
		
	});
	
	/*피부고민별솔루션	*/		
			var aa;
		$(".skinWorries a").hover(
			function(){
				aa=$(this).find("img").attr("src");
				var imgSrc =$(this).attr("href");
				$(this).find("img").attr("src",imgSrc);
			},
			function(){
				$(this).find("img").attr("src",aa);
			}
		);	
		$(".skinWorries a").click(function(e){
			e.preventDefault();
		});	
	/*팝업*/
		$(".packagePhoto li").eq(0).find("a").css({top:"-10px"});
		$(".packagePhoto a").mouseover(function(e){
			var imgSrc ="url(" +$(this).attr("href") + ")";//배경이미지를 넣는 형식을 맞추기 위해 "url("와 ")"을 연결해주었다.
			$(".big").css("background-image",imgSrc);
			$(".packagePhoto a").animate({top:"0px"},0);
			$(this).animate({top:"-10px"},200);
		});
		$(".packagePhoto a").click(function(e){
			e.preventDefault();
			});
		$(".x").click(function(){
			$(".package").hide();
			return false;
		});
});
