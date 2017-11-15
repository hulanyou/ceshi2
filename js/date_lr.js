/********************时间页面切换********************/
//==================右
$("#yuejia").click(function() {
	$(this).addClass("opacity");
	$("#yuejian").removeClass("opacity");
	$(".swiper-slide:first").animate({
		left: "-100%"
	});
	$(".swiper-slide:last").animate({
		right: "99%"
	})
});
//==================左
$("#yuejian").click(function() {
	$(this).addClass("opacity");
	$("#yuejia").removeClass("opacity");
	$(".swiper-slide:first").animate({
		left: "0%"
	});
	$(".swiper-slide:last").animate({
		right: "0%"
	})
});
/********************时间选择********************/
//$(".time_td").click(function() {
//
//	if($(this).hasClass("choice_no")) {
//		$(this).removeClass("choice_yes");
//	} else {
//		$(this).addClass("choice_yes").siblings().removeClass("choice_yes");
//		$(this).addClass("choice_yes").parents().siblings().find(".time_td").removeClass("choice_yes");
//	}
//});
/********************弹框选择********************/
//$(".choice_time li .choice").click(function() {
//	$(this).addClass("choice_yes").siblings().removeClass("choice_yes");
//});
$(".im_tab p").click(function() {
	$(this).addClass("active").siblings().removeClass("active");
	$(".date").eq($(this).index()).show().siblings(".date").hide();
	$(".tab").eq($(this).index()).addClass("active").siblings().removeClass("active");
});
/********************日期********************/
/********************************************/
var day = new Date()
var weekday = new Array(7)
weekday = ["周日", "周一", "周二", "周三", "周四", "周五", "周六", ]
var week = day.getDay(); //获取当前星期
var year = day.getFullYear(); //年
var mon = day.getMonth() + 1; //获取当前月份
var days = day.getDate(); //获取当前日数
var leap_year = year % 4 //判断是否为闰年
var time_s = $(".time_td span");
var l_today = $("#l_today");
var time_p = $(".time_td p");
/********************日历周几赋值********************/
for(var i = 0; i < 20; i++) { //20天一循环
	var week2 = 0;
	week2 = (week + i) % 7;// 求余
	time_s.eq(i).html(weekday[week2]);
}
/********************日历日期表赋值********************/
for(var j = 0; j < 20; j++) {
	days_f = parseFloat(days) + j;
	if(mon == 2 && leap_year == 0) { //闰年闰月
		//alert("润二月")
		if(days_f > 29) {
			days_f = parseFloat(days_f) - 29;
			mon2 = parseFloat(mon) + 1;
			time_p.eq(j).html(mon2 + "-" + days_f);
		} else {
			time_p.eq(j).html(mon + "-" + days_f);
		}
	} else if(mon == 2 && leap_year != 0) {
		//alert("平二月")
		if(days_f > 28) {
			days_f = parseFloat(days_f) - 28;
			mon2 = parseFloat(mon) + 1;
			time_p.eq(j).html(mon2 + "-" + days_f);
		} else {
			time_p.eq(j).html(mon + "-" + days_f);
		}
	} else if(mon == 4 || mon == 6 || mon == 9 || mon == 11) {
		//alert("30天")
		if(days_f > 30) {
			days_f = parseFloat(days_f) - 30;
			mon2 = parseFloat(mon) + 1;
			time_p.eq(j).html(mon2 + "-" + days_f);
		} else {
			time_p.eq(j).html(mon + "-" + days_f);
		}
	} else {
		//alert("正常")
		if(days_f > 31) {
			days_f = parseFloat(days_f) - 31;
			mon2 = parseFloat(mon) + 1;
			time_p.eq(j).html(mon2 + "-" + days_f);
		} else {
			time_p.eq(j).html(mon + "-" + days_f);
		}
	}
}
/********************标题日期********************/
$("#today").html(mon + "-" + days);
if(mon == 4 || mon == 6 || mon == 9 || mon == 11) { //判断当月天数为30天
	if(days <= 11) {
		days = parseFloat(days) + 19;
		l_today.html(mon + "-" + days);
	} else {
		days = parseFloat(days) + 19 - 30;
		if(mon == 12) {
			mon = 1

			l_today.html(mon + "-" + days);
		} else {
			mon = parseFloat(mon) + 1;
			l_today.html(mon + "-" + days);
		}
	}
} else if(mon == 2) { //判断二月份是否闰年
	if(leap_year == 0) {
		if(days <= 10) {
			days = parseFloat(days) + 19;
			l_today.html(mon + "-" + days);
		} else {
			days = parseFloat(days) + 19 - 29;
			mon = parseFloat(mon) + 1;
			l_today.html(mon + "-" + days);
		}
	} else {
		if(days <= 9) {
			days = parseFloat(days) + 19;
			l_today.html(mon + "-" + days);
		} else {
			days = parseFloat(days) + 19 - 28;
			mon = parseFloat(mon) + 1;
			l_today.html(mon + "-" + days);
		}
	}
} else { //31天的月份
	if(days <= 12) {
		days = parseFloat(days) + 19;
		l_today.html(mon + "-" + days);
	} else {
		days = parseFloat(days) + 19 - 31;
		if(mon == 12) {
			mon = 1
			l_today.html(mon + "-" + days);
		} else {
			mon = parseFloat(mon) + 1;
			l_today.html(mon + "-" + days);
		}

	}
}
//排版时间右滑展示-17-3-14新版
var time_num = $(".work_time .choice_time .fl").size();
var time_s = $(".work_time .choice_time .fl").width();
$(".work_time .time").width(time_s*time_num+time_num);//把边框算进去
