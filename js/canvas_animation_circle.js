/*智能设备，canvas进度条动画效果插件
 * 编写人，zcc
 * 2017-6-27
 * ==================================
 * opts.parent 插入到哪里 一个JS元素对象
 * opts.width 宽度 = 2* (半径+弧宽)  
 * opts.radius 半径
 * opts.arc 弧宽
 * opts.perent 百分比 
 * opts.color 弧渲染颜色 [底色,进度色]
 * opts.textColor 文字渲染颜色
 * opts.textSize 文字渲染大小
 * opts.animated 是否以动画的方式绘制 默认false
 * opts.after 绘制完成时执行函数
 * ==================================
 **/
//绘制静态画布
var c=document.getElementById("myCanvas");
var ctx=c.getContext("2d");
ctx.canvas.width = 200;
ctx.canvas.height = 200;
//起始一条路径
ctx.beginPath();
//设置当前线条的宽度
ctx.lineWidth = 10; //10px
//设置笔触的颜色
ctx.strokeStyle = '#ccc';
//arc() 方法创建弧/曲线（用于创建圆或部分圆） 
ctx.arc(100, 100, 90, 0, 2 * Math.PI);
//绘制已定义的路径
ctx.stroke();
ctx.beginPath();
ctx.lineWidth = 10;
ctx.strokeStyle = '#ccc';
//设置开始处为0点钟方向(-90 * Math.PI / 180)//x为百分比值(0-100)
ctx.arc(100, 100, 90, -90 * Math.PI / 180, (0 * 3.6 - 90) * Math.PI / 180);  
ctx.stroke();
//绘制中间的文字
ctx.font = '30px Arial';
ctx.fillStyle = '#10adff';
ctx.textBaseline = 'middle';
ctx.textAlign = 'center';
ctx.fillText('0%', 100, 100);
ctx.translate(0.5, 0.5);
function drawRing(opts) {
	$(".start_btn").removeAttr("onclick");
    var _opts = {
        parent: document.getElementById("schedule"),
        width: 200,
        height: 200,
        radius: 90,
        arc: 10,
        perent: 100,
        color: ['#ccc', '#10adff'],
        textColor: '#10adff',
        textSize: '30px',
        animated: true,
        after: function() {}
    }, k;
    for (k in opts) _opts[k] = opts[k] ;
    var parent = _opts.parent,
        width = _opts.width,
        height = _opts.height,
        radius = _opts.radius,
        arc = _opts.arc,
        perent = parseFloat(_opts.perent),
        color = _opts.color,
        textSize = _opts.textSize,
        textColor = _opts.textColor,
        //替换静态画布
        c = document.getElementById("myCanvas"),
        ctx = null,
        x = 0,
        animated = _opts.animated,
        after = _opts.after;

    parent.appendChild(c);
    ctx = c.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = width;
    //清除锯齿
	if (window.devicePixelRatio) {
		ctx.canvas.style.width = width + "px";
		ctx.canvas.style.height = height + "px";
		ctx.canvas.height = height * window.devicePixelRatio;
		ctx.canvas.width = width * window.devicePixelRatio;
		ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
	}
    function clearFill() {
        ctx.clearRect(0, 0, width, width);
    }

    function fillBG() {
        ctx.beginPath();
        ctx.lineWidth = arc;
        ctx.strokeStyle = color[0];
        ctx.arc(width / 2, width / 2, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    function fillArc(x) {
        ctx.beginPath();
        ctx.lineWidth = arc;
        ctx.strokeStyle = color[1];
        ctx.arc(width / 2, width / 2, radius, -90 * Math.PI / 180, (x * 3.6 - 90) * Math.PI / 180);
        ctx.stroke();
    }

    function fillText(x) {
        ctx.font = textSize + ' Arial';
        ctx.fillStyle = textColor;
        ctx.textBaseline = "middle";
        ctx.textAlign = 'center';
        //toFixed(0)设置小数点位数
        ctx.fillText(x.toFixed(0) + '%', width / 2, width / 2);
    }

    function fill(x) {
        fillBG();
        fillArc(x);
        fillText(x);
    }

    if (!animated) return fill(perent);

    fill(x);
    !function animate() {
        if (++x > perent) return after && after();
        //设置时间
        setTimeout(animate, 100);
        clearFill();
        fill(x);
        if(x==100){
        	$(".start_btn").attr("onclick","drawRing()");
        }
    }();
}
