$(function() {
	//下部高度
	var partUp = document.body.clientHeight - $(".y_header").innerHeight() - $(".head_fixd_h").height();

	$(".serorder_bottom.fixed").height(partUp);
	//输入
	$("#chat_item").click(function() {
			if($(".doc_chat").is(":hidden")) {
				$(".doc_chat").show();
				var hh = $(".doc_chat").height()
				$(".customer_nav_input").css({
					"bottom": hh
				})
			} else {
				$(".doc_chat").hide();
				$(".customer_nav_input").css({
					"bottom": "0"
				})
			}
		})
		//底部聊天框
	$(".y_doctordetial").click(function() {
		$(".m_customer_nav").show()
	});

	//选择不同的治疗方案
	$(".h_search_select select").click(function() {
		if($("#a2").is(":selected")) {
			$(".yongyao").show();
			$(".h_ways").hide();
			$(".hidden").show();
			$(".hidden_doc").hide();
		} else if($("#a3").is(":selected")) {
			$(".yongyao").hide();
			$(".h_ways").show();
			$(".hidden").hide();
			$(".hidden_doc").show();
		} else if($("#a1").is(":selected")) {
			$(".yongyao").hide();
			$(".h_ways").hide();
			$(".hidden").hide();
			$(".hidden_doc").hide();
		}

	});
	
	$(".h_ways .btn").click(function() {
		$(this).next('.box').toggle().parent(".list").siblings(".list").find(".box").hide();
		$(this).addClass("active").parent(".list").siblings(".list").find(".btn").removeClass("active");
	});
	$("#y_show").click(function() {
		$(".hide1").css("height", "auto");
		$(this).parent('.box').hide();
	});
});