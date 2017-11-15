
$(function(){
	$('.apply ').delegate(".item","swipeleft",function(){//左滑显示隐藏按键
		$(this).animate({left:'-3rem'},200,'linear').siblings('.addit').animate({width:'3rem'},200,'linear').addClass("b_line4");
		$(this).parent('li').siblings('li').find('.item').animate({left:'0'},200).siblings('.addit').animate({width:'0'},200).removeClass("b_line4");
		var addit_h = $(this).parents("li").height()+"px";

			$(this).siblings('.addit').css("line-height",addit_h);
	
	});
	$('.apply ').delegate(".item","swiperight",function(){//右滑恢复 
	 $(this).animate({left:'0'},200).siblings('.addit').animate({width:'0'},200).removeClass("b_line4");
	});
	$('.delete').on("tap",function(){ //删除
	 $(this).parent().remove();
	});
	$('.judge').on("tap",function(){ //同意好友申请
	 $(this).find("span").removeClass("sure").addClass("sure_y");
	 $(this).find("span").html("已添加");
	});
	
})

/*健康报告中 增加 编辑 取消 */
$('.m_show').click(function(event) {
	$('.m_hide').show();
	$('.m_show').hide();
	$('.item').animate({left:'-3rem'},200,'linear').siblings('.addit').animate({width:'3rem'},200,'linear').addClass("b_line4");
});

$('.m_hide').click(function(event) {
	$('.m_hide').hide();
	$('.m_show').show();
	$('.item').animate({left:'0'},200).siblings('.addit').animate({width:'0'},200).removeClass("b_line4");
});
$("body").find("a").attr("data-ajax","false");