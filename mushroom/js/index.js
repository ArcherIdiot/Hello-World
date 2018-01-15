$(function(){
	function hover(trigger,answer){
			$(trigger).hover(function(){
			$(answer).show();
		},function(){
			$(answer).hide();
		})
	}
	hover(".customer_item",".customer_content");
	hover(".myshop",".myshop_content");
	hover(".mycart",".cart_info");
	hover(".select_box",".select_box ol");

	// 搜索栏切换
	$(".select_box ol li").click(function(){
		var text=$(this).text();
		$(".selected").html("搜"+text);
		$(this).parent().css("display","none");
		if($(this).index()!=0){
			$(".search_text").attr("placeholder","");
		}else{
			$(".search_text").attr("placeholder","手机壳");
		}
	});

	// 导航切换
	$(".nav_menu_list").hover(function(){
		$(this).find(".nav_more_content").show();
	},function(){
		$(this).find(".nav_more_content").hide();
	})

	//轮播切换
	var c=0;
	function run(){
		var count=$(".banner_mslide_box").find("a");
		var navbg=["#E03142","#FB8F9C","#FAC32B","#2F6A4A","#3D655A","#FF80C5"];
		c++;
		if(c==count.length){
			c=0;
		}
		$(".banner_mslide a").eq(c).show().siblings().hide();
		$("#nav_mid").css("backgroundColor",navbg[c]);
		$(".banner_mslide_box a").eq(c).children('img').show().parent()
		.siblings().children('img').hide();
	}
	var timer=setInterval(run,4000);
	
	$(".banner_mslide_box a").on({
		"mouseenter":function(){
			var index=$(this).index();
			clearInterval(timer);
			$(this).children('img').show().parent().siblings()
			.children('img').hide();
			$(".banner_mslide a").eq(index).show().siblings().hide();
		},
		"mouseleave":function(){
			timer=setInterval(run,4000);
			c=$(this).index();
		}
	})
	$(".banner_mslide a").on({
		"mouseenter":function(){
			clearInterval(timer);
		},
		"mouseleave":function(){
			timer=setInterval(run,4000);
		}
	})
	// 倒时器
	function downTimer(){
		var endTime=new Date("2018/1/8 15:49:00");
		var nowTime=new Date();
		var t=endTime.getTime()-nowTime.getTime();
		var d=Math.floor(t/1000/60/60/24);
		var h=Math.floor(t/1000/60/60%24);
		var m=Math.floor(t/1000/60%60);
		var s=Math.floor(t/1000%60);
		if(t<=0){
			clearInterval(outTimer);
			d=0;
			h=0;
			m=0;
			s=0;
		}
		if(h<10){
			h="0"+h;
		}
		if(m<10){
			m="0"+m;
		}
		if(s<10){
			s="0"+s;
		}
		$(".infos_time .h").html(h);
		$(".infos_time .m").html(m);
		$(".infos_time .s").html(s);
	}
	var outTimer=setInterval(downTimer,1000);

	// 图片随机切换翻转特效
	var eleBack=null,eleFront=null;
	var eleRofIs=$(".redOutfit_imgs");
	var funBackOrFront=function(){
		var num=Math.round(Math.random()*(eleRofIs.length-1));
		var eleRofI=eleRofIs.eq(num).children(".redOutfit_img");
			eleRofI.each(function(){
			if($(this).hasClass("front")){
				eleBack=$(this);
			}else{
				eleFront=$(this);
			}
		})
	}
	setInterval(function(){
		funBackOrFront();
		eleBack.addClass("back").removeClass("front");
		eleBack[0].addEventListener("webkitTransitionEnd",function(){
			eleFront.addClass("front").removeClass("back");
		})
	},5000)
	// 定时(向左)滑动轮播
	var index=0;
	var extent=$(".newDay_carouselImgs").length;
	function leftRun(){
		$(".newDay_carouselImgs").eq(index).animate({"left":"-984px"},500);
		index++;
		if(index==extent){
			index=0;
		}
		$(".newDay_carouselImgs").eq(index).css({"left":"984px"}).animate({"left":"0px"},500);
	}
	function rightRun(){
		$(".newDay_carouselImgs").eq(index).animate({"left":"984px"},500);
		index++;
		if(index==extent){
			index=0;
		}
		$(".newDay_carouselImgs").eq(index).css({"left":"-984px"}).animate({"left":"0px"},500);
	}
	var leftTimer=setInterval(leftRun,5000);

	$(".newDay_carousel").hover(function(){
		clearInterval(leftTimer);
	},function(){
		leftTimer=setInterval(leftRun,5000);
	})

	$(".newDay_prev_btn").click(function(){
		rightRun();
	})
	$(".newDay_next_btn").click(function(){
		leftRun();
	})
});