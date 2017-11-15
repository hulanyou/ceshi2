$(function(){
	$('.item').live("swipeLeft",function(){//宸︽粦鏄剧ず闅愯棌鎸夐敭
		$(this).animate({left:'-3rem'},200,'linear').siblings('.addit').animate({width:'3rem'},200,'linear').addClass("b_line4");
		$(this).parent('li').siblings('li').find('.item').animate({left:'0'},200).siblings('.addit').animate({width:'0'},200).removeClass("b_line4");
		var addit_h = $(this).parent().height()+"px";

			$(this).siblings('.addit').css("line-height",addit_h);
	
	});
	$('.item').live("swipeRight",function(){//鍙虫粦鎭㈠ 
	 $(this).animate({left:'0'},200).siblings('.addit').animate({width:'0'},200).removeClass("b_line4");
	});
	$('.delete').live("tap",function(){ //鍒犻櫎
	 $(this).parent().remove();
	});
	$('.judge').live("tap",function(){ //鍚屾剰濂藉弸鐢宠
	 $(this).find("span").removeClass("sure").addClass("sure_y");
	 $(this).find("span").html("宸叉坊鍔�");
	});
	
})
