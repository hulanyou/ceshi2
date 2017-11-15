$.fn.sjld = function(shenfen,chengshi,quyu){
	var sfp = shenfen+' p'
	var csp = chengshi+' p'
	var qyp = quyu+' p'
	var sfs = shenfen+' .m_zlxg2'
	var css = chengshi+' .m_zlxg2'
	var qys = quyu+' .m_zlxg2'
	var sfli = shenfen+' ul li'
	var csli = chengshi+' ul li'
	var qyli = quyu+' ul li'
	
	var sfgsmr = provinceList;
	var csgsmr = provinceList[0].cityList;
	var qygsmr = provinceList[0].cityList[0].areaList;
	var kuandu = new Array();
	
	
	$(sfp).text(sfgsmr[0].name);
	$(csp).text(csgsmr[0].name);
	$(qyp).text(qygsmr[0]);
	//默认城市
	for(a=0;a<sfgsmr.length;a++){
		var sfmcmr = sfgsmr[a].name;
		var sfnrmr = "<li>"+sfmcmr+"</li>";
		$(shenfen).find('ul').append(sfnrmr);
	}
	for(b=0;b<csgsmr.length;b++){
		var csmcmr = csgsmr[b].name;
		
		var csnrmr = "<li>"+csmcmr+"</li>";
		$(chengshi).find('ul').append(csnrmr);
		
	}
	for(c=0;c<qygsmr.length;c++){
		var qymcmr = qygsmr[c];
		var qynrmr = "<li>"+qymcmr+"</li>";
		$(quyu).find('ul').append(qynrmr);
	}
	Array.max=function(array)
		{
    		return Math.max.apply(Math,array);
		}
	
/*---------------------------------------------------------------------*/

	$(sfli).click(function(){
		$(this).addClass('cur').siblings('li').removeClass('cur');
		var dqsf = $(this).text();
		$(shenfen).find('p').text(dqsf);
		$(shenfen).find('p').attr('title',dqsf);
		var sfnum = $(this).index();
		
		var csgs = provinceList[sfnum].cityList;
		var csgs2 = provinceList[sfnum].cityList[0].areaList;
		$(chengshi).find('ul').text('');
		var kuandu = new Array();
		for(i=0;i<csgs.length;i++){
			var csmc = csgs[i].name;
			var csnr = "<li>"+csmc+"</li>";
			$(chengshi).find('ul').append(csnr);
		}

		Array.max=function(array)
		{
		    return Math.max.apply(Math,array);
		}

		var max_kd = Array.max(kuandu); 

		var qygsdqmr = provinceList[sfnum].cityList[0].areaList;
		$(quyu).find('ul').text('');
		for(j=0;j<qygsdqmr.length;j++){
			var qymc = qygsdqmr[j];
			var qynr = "<li>"+qymc+"</li>";
			$(quyu).find('ul').append(qynr);
		}		
		$(csp).text(csgs[0].name);
		$(qyp).text(csgs2[0]);
		$('#sfdq_num').val(sfnum);

	/*------------------*/
	$(csli).click(function(){
		$(this).addClass('cur').siblings('li').removeClass('cur');
		var dqcs = $(this).text();
		var dqsf_num = $('#sfdq_num').val();
		if(dqsf_num==""){
			dqsf_num=0;
			}
			else{
			var dqsf_num = $('#sfdq_num').val();
			}
		$(chengshi).find('p').text(dqcs);
		$(chengshi).find('p').attr('title',dqcs);
		var csnum = $(this).index();
		var qygs = provinceList[dqsf_num].cityList[csnum].areaList;
		$(quyu).find('ul').text('');

		for(j=0;j<qygs.length;j++){
			var qymc = qygs[j];
			var qynr = "<li>"+qymc+"</li>";
			$(quyu).find('ul').append(qynr);
		}
	
		$(qyp).text(qygs[0]);
		$('#csdq_num').val(csnum);

		$(this).parents('.m_zlxg2').width(kuandu);
		$(qyli).click(function(){
			$(this).addClass('cur').siblings('li').removeClass('cur');
			var dqqy = $(this).text();
			$(quyu).find('p').text(dqqy);
			$(quyu).find('p').attr('title',dqqy);
					
		})//区级

	})	//市级


	/*------------------*/	
	$(qyli).click(function(){
	$(this).addClass('cur').siblings('li').removeClass('cur');
		var dqqy = $(this).text();
		$(quyu).find('p').text(dqqy);
		$(quyu).find('p').attr('title',dqqy);		
	})//区级


})//省级


/*---------------------------------------------------------------------*/		
		
$(csli).click(function(){
	$(this).addClass('cur').siblings('li').removeClass('cur');

	var dqcs = $(this).text();
	var dqsf_num = $('#sfdq_num').val();
	if(dqsf_num==""){
		dqsf_num=0;
	}
	else{
		var dqsf_num = $('#sfdq_num').val();
	}
	$(chengshi).find('p').text(dqcs);
	$(chengshi).find('p').attr('title',dqcs);
	var csnum = $(this).index();
	var qygs = provinceList[dqsf_num].cityList[csnum].areaList;
	$(quyu).find('ul').text('');
	for(j=0;j<qygs.length;j++){
		var qymc = qygs[j];
		var qynr = "<li>"+qymc+"</li>";
		$(quyu).find('ul').append(qynr);
	}

	$(qyp).text(qygs[0]);
	$('#csdq_num').val(csnum);
	/*------------------*/
	$(qyli).click(function(){
		var dqqy = $(this).text();
		$(quyu).find('p').text(dqqy);
		$(quyu).find('p').attr('title',dqqy);		
	})//区级

})	//市级


/*---------------------------------------------------------------------*/	

$(qyli).click(function(){
	$(this).addClass('cur').siblings('li').removeClass('cur');
	var dqqy = $(this).text();
	$(quyu).find('p').text(dqqy);
	$(quyu).find('p').attr('title',dqqy);		
})//区级


/*---------------------------------------------------------------------*/
$('.m_zlxg').click(function(){
	$('#sfdq_tj').val($(sfp).text());
	$('#csdq_tj').val($(csp).text());
	$('#qydq_tj').val($(qyp).text());
	})//表单传值获取
}


var provinceList = [
	{name:'热点商品', cityList:[		   
	{name:'母婴用品', areaList:['妈妈专区','哺乳喂养']},		   
	{name:'体检商城', areaList:['基因检测卡','综合套餐卡','海外体检卡']},
	{name:'保险商城', areaList:['商业医疗保险','商业疾病保险','商业人寿保险']},
	{name:'疫苗产品', areaList:['请选择']},
	{name:'滋补保健',  areaList:['请选择']},
	]},
	{name:'国内药品', cityList:[		   
	{name:'西药药品', areaList:['请选择']},	
	{name:'中成药品', areaList:['请选择']},
	{name:'中草药品', areaList:['请选择']},	   
	{name:'免疫药品',  areaList:['请选择']},
	]},
	{name:'国际药品', cityList:[		   
	{name:'美国药品', areaList:['请选择']},
	{name:'欧洲药品', areaList:['请选择']},
	{name:'日本药品', areaList:['请选择']},
	{name:'韩国药品', areaList:['请选择']},
	{name:'其他国际药品',  areaList:['请选择']},
	]},
	{name:'益智健体', cityList:[		   
	{name:'医疗食品', areaList:['请选择']},	
	{name:'健康食品', areaList:['请选择']},	
	{name:'医疗用品', areaList:['请选择']},		   
	{name:'运动用品',  areaList:['请选择']},
	]},
	{name:'云朵特色', cityList:[		   
	{name:'美容抗衰', areaList:['请选择']},	
	{name:'减肥塑身', areaList:['请选择']},	
	{name:'保健生活', areaList:['请选择']},		   
	{name:'成人用品',  areaList:['请选择']},
	]},
	{name:'个护健康', cityList:[		   
	{name:'眼睛护理',  areaList:['请选择']},		   
	{name:'口腔护理',  areaList:['请选择']},
	{name:'足部护理',  areaList:['请选择']},		   
	{name:'女士卫生护理', areaList:['请选择']},
	]}
];
