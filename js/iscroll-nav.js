//左侧导航栏选中效果切换
$(".zc_nav aside li").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
	$(".zc_reportitem").eq($(this).index()).show().siblings(".zc_reportitem").hide();
});

//左侧导航栏和右侧内容高度
var w = document.documentElement ? document.documentElement.clientHeight : document.body.clientHeight;
var h = $(".y_header").innerHeight();
if($(".im_tab").length > 0) {
	var tab_h = $(".im_tab").outerHeight(true);
	$(".zc_reportmain").height(w - h - tab_h);
	$(".inner").height(w - h - tab_h);
} else {
	$(".zc_reportmain").height(w - h);
	$(".inner").height(w - h);
}
var li_h = $(".zc_nav .zc_mednav li").height()
$(".zc_nav .zc_mednav li").height(li_h-1);
if($(".im_tab").length > 0) {
	var tab_h = $(".im_tab").outerHeight(true);
	if($(".pre_tit").length > 0) {
		var tab_h2 = $(".im_tab").height();
		var cc = $(".pre_tit").height();
		$(".zc_reportmain").height(w - h - tab_h -cc);
		$(".inner").height(w - h - tab_h-tab_h2 + 11);
	} else {
		$(".zc_reportmain").height(w - h - tab_h);
		$(".inner").height(w - h - tab_h);
	}
} else {
	$(".zc_reportmain").height(w - h);
	$(".inner").height(w - h);
}

//获取锚点 跳转之后返回原路径
var url = window.location.toString(); //进这个页面的url
var id = url.split("#")[1]; //url例如： www.baidu.com#maodian(这个是你锚点的位置)
var mao = $("#a" + id);
mao.addClass("active").siblings().removeClass("active");

if(id) {
	var num = id - 1;
	$(".zc_reportitem").eq(num).show().siblings(".zc_reportitem").hide();
}

//左侧导航滚动 

//禁止触发touchmove事件
$(".zc_mednav").on('touchmove', function(event) {
	event.preventDefault();
}, false);

(function() {
	var isMobile = false;
	var phoneDetect = document.getElementById('phoneDetect'),
		color = getStyle(phoneDetect, "color"),
		backgroundColor = getStyle(phoneDetect, "background-color");

	if(color === 'rgb(255, 0, 0)' && backgroundColor === 'rgb(255, 0, 0)') {
		isMobile = true;
	}

	window.isMobile = isMobile;

	//get element style
	function getStyle(oElm, strCssRule) {
		var strValue = "";
		if(document.defaultView && document.defaultView.getComputedStyle) {
			strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
		} else if(oElm.currentStyle) {
			strCssRule = strCssRule.replace(/\-(\w)/g, function(strMatch, p1) {
				return p1.toUpperCase();
			});
			strValue = oElm.currentStyle[strCssRule];
		}
		return strValue;
	}
})();

//just test
jQuery(function($) {
	//横向滚动列表
	$('.zc_mednav').each(function() {
		var self = $(this),
			length = self.find('li').length,
			hh = self.find('li').height(),
			ww = length * hh; //每个li的宽度
		self.find('ul').height(ww);

	});

	$('.zc_mednav .inner').each(function() {
		var timeId;
		new iScroll(this, {
			vScroll: true, //禁止垂直滚动
			vScrollbar: true, //禁止出现垂直滚动条
			hScrollbar: false,
			fadeScrollbar: false,
			onBeforeScrollStart: function(e) {
				if(this.absDistX > (this.absDistY + 5)) {
					e.preventDefault();
				}
			},
			onTouchEnd: function() {
				var self = this;
				if(self.touchEndTimeId) {
					clearTimeout(self.touchEndTimeId);
				}
				self.touchEndTimeId = setTimeout(function() {
					self.absDistX = 0;
					self.absDistX = 0;
				}, 600);
			}
		});
	})
});