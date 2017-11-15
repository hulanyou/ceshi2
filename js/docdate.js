	$(function(){
		//医生作为用户时 点击选择按钮选中时间 （可复选）
		$("#timecheck tr td span").click(function(){
			$(this).toggleClass("active");
		});
		$("#timecheck .y_mlbtn1").click(function(){
			$(".y_timetable tr td span").toggleClass("active");
		});		
		//用户预约医生时间 点击选择按钮选中时间 （单选）
		$("#timeRadio tr td span").click(function(){
			$(".y_timetable .y_mlbtn").removeClass("active");
			$(this).addClass("active");

		});

		//点击vip改变文本内容

		$(".zc_changetext_f").click(function(){
//			$(".zc_docregister p:first-child").html("预约挂号：2016年5月24  星期二 上午");
			$(".zc_docregister p b").html("25");
		});
		$(".zc_changetext_t").click(function(){
//			$(".zc_docregister p:first-child").html("预约挂号：2016年5月24  星期三 下午");
			$(".zc_docregister p b").html("99");
		});	
		$(".zc_changetext_v").click(function(){
//			$(".zc_docregister p:first-child").html("预约挂号：2016年5月25  星期四 下午");
			$(".zc_docregister p b").html("199");
		});	
		$(".zc_changetext_y").click(function(){
//			$(".zc_docregister p:first-child").html("预约挂号：2016年5月25  星期四 下午");
			$(".zc_docregister p b").html("399");
		});		
		$(".m_inquiryservice li").click(function(){
		  	$(this).addClass("active").siblings().removeClass("active");
	  	
		 });
		$(".z_inquiryservice li").click(function(){
		  	$(this).addClass("active").siblings().removeClass("active");
	  	
		 });	 

		//选择时间zc
		var day=new Date()
		var weekday=new Array(7)
		weekday=["周日","周一","周二","周三","周四","周五","周六"]
		var week = day.getDay();//获取当前星期
		var mon = day.getMonth()+1;//获取当前月份
		var days = day.getDate();//获取当前日数
		var aaa = day.toLocaleDateString();
		if(mon < 10 ){mon = "0" + mon};
		if(days < 10){days = "0" + days};
		$("#one").html(function(n){
    		return  05 + "." +05 + "<br/>" + "今天";
    	});

  		$("#two").html(function(n){				
  				if ((week+1) > 6){
  					var j = week+1-7;
  					return  05 + "." +06 + "<br/>" + weekday[j];
				}else{
					return 05 + "." +06 + "<br/>" + weekday[week+1];
				}
    	});  
   		$("#three").html(function(n){				
  				if ((week+2) > 6){
  					var j = week+2-7;
  					return  05 + "." + 07 + "<br/>" + weekday[j];
				}else{return  05 + "." + 07 + "<br/>" + weekday[week+2];}				 			
    	});  
   		$("#four").html(function(n){				
  				if ((week+3) > 6){
  					var j = week+3-7;
  					return  05 + "." + 08 + "<br/>" + weekday[j];
				}else{return  05 + "." + 08 + "<br/>" + weekday[week+3];}				 			
    	});  
   		$("#five").html(function(n){				
  				if ((week+4) > 6){
  					var j = week+4-7;
  					return  05 + "." + 09 + "<br/>" + weekday[j];
				}else{return  05 + "." + 09 + "<br/>" + weekday[week+4];}				 			
    	});      	
  		$("#six").html(function(n){				
  				if ((week+5) > 6){
  					var j = week+5-7;
  					return  05 + "." + 10 + "<br/>" + weekday[j];
				}else{return  05 + "." + 10 + "<br/>" + weekday[week+5];}				 			
    	});   
   		$("#seven").html(function(n){				
  				if ((week+6) > 6){
  					var j = week+6-7;
  					return  05 + "." + 11 + "<br/>" + weekday[j];
				}else{return  05 + "." + 11 + "<br/>" + weekday[week+6];}				 			
    	});    	
	});	