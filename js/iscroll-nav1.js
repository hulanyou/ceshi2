
/*只控制div的高度*/

//左侧导航栏选中效果切换
 	$(".zc_mednav li").click(function(){
	  	$(this).addClass("active").siblings().removeClass("active");
	  	$(".zc_reportitem").eq($(this).index()).show().siblings(".zc_reportitem").hide();
	  	$(this).find(".list").slideToggle();// 医院医生 左侧 手风琴切换
	  	$(this).siblings("li").find(".list").slideUp();

		if($(this).find(".next").hasClass("active")) {
			$(this).find(".next").removeClass("active");
		} else {
			$(this).find(".next").addClass("active");
		}

  	});

 	//左侧导航栏和右侧内容高度
  	var w=document.documentElement?document.documentElement.clientHeight:document.body.clientHeight;
  	var h=$(".y_header").outerHeight(true);
	if($(".im_tab").length > 0){		
		var tab_h = $(".im_tab").outerHeight(true);
		$(".zc_reportmain").height(w-h-tab_h-10);
		$(".zc_mednav").height(w-h-tab_h-10);
	}else{			
		$(".zc_reportmain").height(w-h);
		$(".zc_mednav").height(w-h);
		$(".zc_nav .qq").height(w-h);
	}

//孕婴管理
var li_h = $(".zc_nav .zc_mednav li").height()
// $(".zc_nav .zc_mednav li").height(li_h-1);
if($(".im_tab").length > 0 && $(".im_tab").length == 0) {
	var tab_h = $(".im_tab").height();
	if($(".pre_tit").length > 0) {
		var tab_h2 = $(".im_tab").height();
		var cc = $(".pre_tit").height();
		$(".zc_reportmain").height(w - h - tab_h -cc);
		$(".zc_mednav").height(w - h - tab_h-tab_h2 + 11);
	} else {
		$(".zc_reportmain").height(w - h - tab_h);
		$(".zc_mednav").height(w - h - tab_h);
	}
}else if($(".im_tab1").length > 0 && $(".im_tab").length > 0 ) {
	var tab_h = $(".im_tab1").height()+$(".im_tab").height();
	if($(".pre_tit").length > 0) {
		var tab_h2 = $(".im_tab1").height()+$(".im_tab").height();
		var cc = $(".pre_tit").height();
		$(".zc_reportmain").height(w - h - tab_h -cc);
		$(".zc_mednav").height(w - h - tab_h-tab_h2 + 11);
	} else {
		$(".zc_reportmain").height(w - h - tab_h);
		$(".zc_mednav").height(w - h - tab_h);
	}
} else {
	$(".zc_reportmain").height(w - h);
	$(".zc_mednav").height(w - h);
}

