
/*横向滚动 和切换效果*/

		$(function(){
			//tab
			$(".h_shop  li").on("click",function(){
			  	$(this).addClass("active").siblings().removeClass("active");
			  	$(".box").eq($(this).index()).show().siblings(".box").hide();
		  	});
		});		

	  	//禁止触发touchmove事件
	 	// $("#zc_mednav").on('touchmove',function(event) { event.preventDefault(); }, false);

		(function () {
			var isMobile = false;
			var phoneDetect = document.getElementById('phoneDetect'),
				color = getStyle(phoneDetect, "color"),
				backgroundColor = getStyle(phoneDetect, "background-color");

			if (color === 'rgb(255, 0, 0)'  && backgroundColor === 'rgb(255, 0, 0)') {
				isMobile = true;
			}

			window.isMobile = isMobile;

			//get element style
			function getStyle(oElm, strCssRule){
				var strValue = "";
				if(document.defaultView && document.defaultView.getComputedStyle){
					strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
				}
				else if(oElm.currentStyle){
					strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
						return p1.toUpperCase();
					});
					strValue = oElm.currentStyle[strCssRule];
				}
				return strValue;
			}
		})();
		//alert(window.isMobile);
		//just test
		jQuery(function ($) {
			
			//横向滚动列表
			$('.h_shop').each(function () {
				var self = $(this),
					length = self.find('li').length,
					w = length * 90;//每个li的宽度
				self.find('ul').width(w);
			});

			$('.h_shop .inner').each(function () {
				var timeId;
				 new iScroll(this, {
					  vScroll: false,//禁止垂直滚动
					  vScrollbar:true,//禁止出现垂直滚动条
					  hScrollbar:false,//禁止出现垂直滚动条
					  fadeScrollbar:false,
				    onBeforeScrollStart: function (e) {
				        if ( this.absDistX > (this.absDistY + 5 ) ) {
				            // user is scrolling the x axis, so prevent the browsers' native scrolling
				            e.preventDefault();
				        }
				    },
				    onTouchEnd: function () {
				    	var self = this;
				    	if (self.touchEndTimeId) {
				    		clearTimeout(self.touchEndTimeId);
				    	}
				    	
				    	self.touchEndTimeId = setTimeout(function () {
				    		self.absDistX = 0;
				    		self.absDistX = 0;	
				    	}, 600);
				    }
				});
			})
		});
