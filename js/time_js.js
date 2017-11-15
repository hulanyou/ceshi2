var normalelapse = 100;
var nextelapse = normalelapse;
var counter;
var startTime;
var start = clock.innerText;
var finish = "00:00:00";
var timer = null ;

// 开始运行  
function run() {
	startB.innerText = "继续";
	$(startB).attr("onclick","javascript:void(0)");
    startB.disabled = true;
    endB.disabled = false;
    counter = 0;
    // 初始化开始时间  
    startTime = new Date().valueOf();
    // nextelapse是定时时间, 初始时为100毫秒  
    // 注意setInterval函数: 时间逝去nextelapse(毫秒)后, onTimer才开始执行  
    timer = window.setInterval("onTimer()", nextelapse);
}
// 停止运行  
function stop() {
	$(startB).attr("onclick","run()");
    startB.disabled = false;
    endB.disabled = true;
    window.clearTimeout(timer);
}
window.onload = function() {
    endB.disabled = true;
}
// 倒计时函数  
function onTimer() 
{
    if (start == finish) 
    {
        window.clearInterval(timer);
        startB.innerText = "完成";
        $("#diagnomodalactive").show();
        $(".modal-backdrop2").addClass("in");       
        return;
    }
    $(".y_back").attr("onclick","javascript:void(0)")
    $("#see_more").attr("onclick","javascript:void(0)")
    $(".y_back").click(function(){
    	stop() ;
    	$("#diagnomodalactive2").show();
    	$(".modal-backdrop2").addClass("in"); 
    	$("#no_btn").attr("onclick","run()");
    	$("#no_btn").click(function(){		
	    	$("#diagnomodalactive2").hide();
	    	$(".modal-backdrop2").removeClass("in");  
    	})  
	    $("#yes_btn").click(function(){
			window.location.href="javascript:history.back(-1)" ;
	    })    	 
    })
     $("#see_more").click(function(){
    	stop() ;
    	$("#diagnomodalactive2").show();
    	$(".modal-backdrop2").addClass("in"); 
    	$("#no_btn").attr("onclick","run()");
    	$("#no_btn").click(function(){		
	    	$("#diagnomodalactive2").hide();
	    	$(".modal-backdrop2").removeClass("in");  
    	})  
	    $("#yes_btn").click(function(){
			window.location.href="portrait_details3.html" ;
	    })    	 
    })   
    var hms = new String(start).split(":");
    var ms = new Number(hms[2]);
    var s = new Number(hms[1]);
    var m = new Number(hms[0]);
//  var h = new Number(hms[0]);
    ms -= 10;
    if (ms < 0) 
    {
        ms = 90;
        s -= 1;
        if (s < 0) 
        {
            s = 59;
            m -= 1;
        }
        if (m < 0) 
        {
            m = 59;
         
        }
    }
    var ms = ms < 10 ? ("0" + ms) : ms;
    var ss = s < 10 ? ("0" + s) : s;
    var sm = m < 10 ? ("0" + m) : m;
//  var sh = h < 10 ? ("0" + h) : h;
    start = sm + ":" + ss + ":" + ms;
    clock.innerText = start;
    //圆形进度动画
// 	var round = m*60 + (s+1);	
// 	$(".pie_right, .right ").css({'clip':'rect(0,auto,auto,0)'})
	
    // 清除上一次的定时器  
    window.clearInterval(timer);
    // 自校验系统时间得到时间差, 并由此得到下次所启动的新定时器的时间nextelapse  
    counter++;
    var counterSecs = counter * 100;
    var elapseSecs = new Date().valueOf() - startTime;
    var diffSecs = counterSecs - elapseSecs;
    nextelapse = normalelapse + diffSecs;
    if (nextelapse < 0)
        nextelapse = 0;
    // 启动新的定时器  
    timer = window.setInterval("onTimer()", nextelapse);
}


function removepop()
{			
	$("#diagnomodalactive").hide();
	$(".modal-backdrop2").removeClass("in");
				
}

