
$(function() {
	$("body").attr("id", 'share');

	//购物车
	//调用错误提示信息的js
	// var timeout;
	// var timeout2;
	// $("#error_btn").click(function() {
	// 	clearTimeout(timeout);
	// 	clearTimeout(timeout2);
	// 	$(".error_message").addClass("show");
	// 	$(".error_message").html("成功加入购物车");
	// 	$(".m_cart").find("span").removeClass("hide");
	// 	timeout = setTimeout(function() {
	// 		$(".error_message").addClass("hide");

	// 	}, 2000);
	// 	timeout2 = setTimeout(function() {
	// 		$(".error_message").removeClass("hide show");
	// 	}, 2300);
	// 	return false;
	// });

	$("#error_btn2").click(function() {
		clearTimeout(timeout);
		clearTimeout(timeout2);
		$(".error_message").addClass("show");
		$(".error_message").html("成功加入处方单");
		$(".m_cart").find("span").removeClass("hide");
		timeout = setTimeout(function() {
			$(".error_message").addClass("hide");

		}, 2000);
		timeout2 = setTimeout(function() {
			$(".error_message").removeClass("hide show");
		}, 2300);
		return false;
	});

	//收藏——切换
	$(".m_a1").click(function() {

		if ($(this).attr("id") == "follow_off") {
			clearTimeout(timeout);
			clearTimeout(timeout2);
			$(this).attr("id", 'follow_on');
			$(this).find("s").css("background-position", "top");
			$(".error_message").addClass("show");
			$(".error_message").html("收藏成功");
			timeout = setTimeout(function() {
				$(".error_message").addClass("hide");

			}, 2000);
			timeout2 = setTimeout(function() {
				$(".error_message").removeClass("hide show");
			}, 2300);
			return false;

		} else if ($(this).attr("id") == "follow_on") {
			clearTimeout(timeout);
			clearTimeout(timeout2);
			$(this).attr("id", 'follow_off');
			$(this).find("s").css("background-position", "bottom");
			$(".error_message").addClass("show");
			$(".error_message").html("取消收藏成功");
			timeout = setTimeout(function() {
				$(".error_message").addClass("hide");

			}, 2000);
			timeout2 = setTimeout(function() {
				$(".error_message").removeClass("hide show");
			}, 2300);
			return false;
		}

	});

	//返回头部

	//首先将#back-to-top隐藏
	$(".m_return").hide();
	//当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失    	
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$(".m_return").fadeIn(500);
		} else {
			$(".m_return").fadeOut(500);
		}
	});
	//当点击跳转链接后，回到页面顶部位置
	$(".m_return a").click(function() {
		$('body,html').animate({
				scrollTop: 0
			},
			1000);
		return false;
	});
	//详情页 客服和拨打电话
	$('.m_a0').click(function() {
		$(".modal-backdrop,.tel").addClass("in");
	});	
	$('.m_a2').click(function() {
		$(".modal-backdrop,.share").addClass("in");
	});

	//详情页 图片 1:1
	var img_w = $(".square_pic").width();
	$(".square_pic").height(img_w);
});



function c_hide(){
	$(".modal-backdrop,.h-customer-service").removeClass("in");
}

document.write("<link rel=\"stylesheet\" href=\"http://ydtest.ydys.com/css/share.css\" type=\"text/css\" media=\"screen\"/>");


//详情页 滑动
var swiper2 = new Swiper('.swiper-container', {
	pagination: '.swiper-pagination',
	/*分页器容器的css选择器或HTML标签*/
	paginationClickable: true,
	/*点击分页器的指示点分页器会控制Swiper切换*/
	loop: true,
	/*无限循环切换*/
	autoplay: 2000 /*自动滚动*/
});

//注意：以下代码替换到项目时 请直接删除




//详情页 点击客服
// $(".m_a0").click(function() {
// 	$("body").find(".medicine_details_btn");
// 	$("").appendTo(".medicine_details_btn");
// 	$(".modal-backdrop,.tel").addClass("in");
// 	$("body").find(".tel").css("position", "fixed");
// 	$("body").find(".tel").css("bottom", "0");
// });

// //详情页 点击分享弹出分享框
// $(".m_a2").click(function() {
// 	$("body").find(".medicine_details_btn");
// 	$("").appendTo(".medicine_details_btn");
// 	$(".modal-backdrop,.share").addClass("in");
// });

//点击发送到弹出分享框
$(".m_a3").click(function() {
	$("body").find(".medicine_details_btn").attr("id", 'insert_share');
	$("<section class='modal-backdrop fade' onclick='c_hide()'></section><nav class='y_sharebox'><header>发送至</header><ul><li style='margin-left: 25%;'><a href='javascript:void(0)'><span class='y_ico'><img src='http://ydtest.ydys.com/img/y_share2.png' /></span>微信好友</a></li><li><a href='javascript:void(0)'><span class='y_ico'><img src='http://ydtest.ydys.com/img/y_share8.png'></span>通讯录好友</a></li>	</ul><footer class='y_carecancel' onclick='c_hide()'>取消</footer></nav>").appendTo("#insert_share");
	$("body").find(".y_sharebox").css("position", "fixed");
	$("body").find(".y_sharebox").css("bottom", "0");
	$(".modal-backdrop,.y_sharebox").addClass("in");
	$("body").addClass("modal-open");
});

var $root = $('html, body');
//$(".y_orderlistnav.del_tab").delegate('.tab','click',function() {
//  var href = $.attr(this, 'href');
//  $root.animate({
//      scrollTop: $(href).offset().top
//  }, 500, function () {
//      window.location.hash = href;
//  });
//  return false;
//});



	