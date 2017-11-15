	function gtIOS6() {
		var userAgent = window.navigator.userAgent;
		var ios = userAgent.match(/(iPad|iPhone|iPod)\s+OS\s([\d_\.]+)/);
		return ios && ios[2] && (parseInt(ios[2].replace(/_/g, '.'), 10) >= 6);
	}
$(function() {

		/* 跳转他人账户的提示*/
		$(".finend-link").click(function() {
			$(this).remove();	
		});	


	$("body").height($(window).height());
	
	/*商品/医生，表头悬浮*/
	var head_fixd_h = $(".head_fixd").height();
	$(".head_fixd_h").height(head_fixd_h);
	
	// 检测iOS版本大于等于6


	var nav = document.querySelector('header');

	if (gtIOS6()) {
		// 大于等于iOS6版本使用sticky
		nav.classList.add('sticky');
	} else {
		var navOffsetY = nav.offsetTop;

		function onScroll(e) {
			window.scrollY > navOffsetY ? nav.classList.add('fixed') : nav.classList.remove('fixed');
		}
		window.addEventListener('scroll', onScroll);
	}
	// 判断是否支持sticky属性
	function isSupportSticky() {
		var prefixTestList = ['', '-webkit-', '-ms-', '-moz-', '-o-'];
		var stickyText = '';
		for (var i = 0; i < prefixTestList.length; i++) {
			stickyText += 'position:' + prefixTestList[i] + 'sticky;';
		}
		// 创建一个dom来检查
		var div = document.createElement('div');
		var body = document.body;
		div.style.cssText = 'display:none;' + stickyText;
		body.appendChild(div);
		var isSupport = /sticky/i.test(window.getComputedStyle(div).position);
		body.removeChild(div);
		div = null;
		return isSupport;
	}
		//订单切换
			//tab初始状态
		function initTab(){
			var tabW = "";
			var tabOff = "";
			if($("section").hasClass("im_tab")  ){
				if($(".im_tab").hasClass("im_tab3") || $(".im_tab").hasClass("im_tab4")){
					if($(".im_tab .active>span").length!=0 ){
						tabW = $(".im_tab .active span").width();
						var faLeft = $(".im_tab .active").position().left;
						var sonLeft =$(".im_tab .active span").position().left;
						tabOff = faLeft + sonLeft; 
					}else{
						tabW = $(".im_tab .active").width();
						tabOff =  $(".im_tab .active").position().left;	
					}
				}else{
					var ww = $(".im_tab p:eq(0)").width();
					tabW =ww-50;
					
					if($(".im_tab p:eq(0)").hasClass("active")){
						tabOff = (ww-tabW)/2
					}else if($(".im_tab p:eq(1)").hasClass("active")){
						tabOff = ww+(ww-tabW)/2
					}					
				}
				$(".im_tab .underline").css({"left":tabOff,"width":tabW});
			}else if($("nav").hasClass("y_orderlistnav")){
				tabW = $(".y_orderlistnav .tab").width();
				tabOff =  $(".y_orderlistnav .active").position().left;
				$(".y_orderlistnav .underline").css({"left":tabOff,"width":tabW});
			}
		}
			initTab();
		$(".im_tab").delegate('p','click',function() {
			var tabW = "";
			var tabOff="";
			if($(".im_tab").hasClass("im_tab3") || $(".im_tab").hasClass("im_tab4")){
				if($(this).find("span").length!=0){
				//获取字府串宽度
				 tabW = $(this).find("span").width();
				//获取距窗口位移
					var faLeft = $(this).position().left;
					var sonLeft =$(this).find("span").position().left;
					tabOff =  faLeft + sonLeft;
					//两个切换时,下划线一样长
					if($(".im_tab p").length == 2){
						
						if($(".im_tab p:eq(0) span").width()<$(".im_tab p:eq(1) span").width()){
							if($(this).index() == 0){
								tabW = $(".im_tab p:eq(1)").find("span").width();
								tabOff =  faLeft + sonLeft-19;
							}
						}
					}				
				}else{
					tabW = $(this).width();
					tabOff = $(this).position().left;
				}
			}else{
				var ww = $(this).width();
				tabW =ww-50;
				if($(this).index()==0){
					tabOff = (ww-tabW)/2
				}else if($(this).index()==1){
					tabOff = ww+(ww-tabW)/2
				}
			}
			//下划线效果
			$(".im_tab .underline").css({"left":tabOff,"width":tabW,"transition": "all linear 0.3s"});
			$(this).addClass("active").siblings().removeClass("active");
			$(".zc_nav").eq($(this).index()).show().siblings(".zc_nav").hide();
			$(".zc_all").eq($(this).index()).show().siblings(".zc_all").hide();
			$(".y_repbox").eq($(this).index()).show().siblings(".y_repbox").hide();
			$(".zc_reportitem").eq($(this).index()).show().siblings('.zc_reportitem').hide();
			//公共切換
			$(".public_tab").eq($(this).index()).show().siblings(".public_tab").hide();
		});

		$(".y_orderlistnav").delegate('.tab','click',function() {
			var tabW = $(this).width();
			//获取距窗口位移
			var tabOff = $(this).position().left;
			//下划线效果
			$(".y_orderlistnav .underline").css({"left":tabOff,"width":tabW,"transition": "all linear 0.3s"});
			$(this).addClass("active").siblings().removeClass("active");
			$(".order_list").eq($(this).index()).show().siblings(".order_list").hide();
		    var href = $.attr(this, 'href');
		    $root.animate({
		        scrollTop: $(href).offset().top
		    }, 500, function () {
//		        window.location.hash = href;
		    });
		    return false;		
		});
		//点击输入框，文本框，使提示信息消失
		$("input").click(function() {
			$(this).attr("placeholder","");
		});	
		$("textarea").click(function() {
			$(this).html("");
			
		});		
})
function errorshow(message){
	var timeout;
	var timeout2;
	clearTimeout(timeout);
	clearTimeout(timeout2);
	$(".error_message").html(message);
	$(".error_message").addClass("show");
	timeout2 = setTimeout(function() {
	$(".error_message").removeClass("hide");
	$(".error_message").removeClass("show");
	}, 1500);
}


//input 框调软键盘 页面上滑
//$(function(){
    //判断访问终端
   // var browser={
       /* versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return {*/
               // trident: u.indexOf('Trident') > -1, //IE内核
               // presto: u.indexOf('Presto') > -1, //opera内核
              //  webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
              //  gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
               // mobile: !!u.match(/AppleWebKit.*Mobile.), //是否为移动终端
               // ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
               // android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
               // iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
               // iPad: u.indexOf('iPad') > -1, //是否iPad
                //webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
                //weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
               // qq: u.match(/\sQQ/i) == " qq" //是否QQ
           // };
        //}(),
        //language:(navigator.browserLanguage || navigator.language).toLowerCase()
    //};
    
    //function pso(_this){
       // var _top = parseInt($(_this).offset().top);//这个_top指当前目标元素相对于当前视口(window)的顶部距离
      //  var scrol = $(".absolutewrapperslide").scrollTop();
       // $(".absolutewrapperslide").scrollTop(scrol+_top-100);//这个100是自己定的，最后的作用是当软键盘弹出后让该目标input距离视口顶部多少距离，从而让input自动顶上去。可以根据自己的视觉感受，自定义这个值，只要input框在几乎所有的手机中都不能被软键盘遮住就可以了。
    //}
    //if(browser.versions.android){//如果是安卓手机则执行这个功能
//  	var url = "${pageContext.request.contextPath}/static/frontpage/css/androidhead.css";
//  	$("<link>").attr({ rel: "stylesheet",type: "text/css",href: url}).appendTo("head");
//      $(".top-height").height("2.2rem");
       // $("input").on("focusin",function(event){
          //  var _this = this;
          //  $(window).resize(function(){//当点击input框之后，视口高度发生变化，则软键盘弹出了，这时，调用pso()函数，让input顶上去。
              //  pso(_this);

           // })
       // })
    //}
//})
