$(document).ready(function(){
	$("#container").addClass("start");
	$("#container").css("max-width", "100%")
	var id=$("#menu1").attr("data-rol");    
	$("nav li").removeClass("on");    
	$("#menu1").addClass("on");    
	$(".content").removeClass("prev this next");        
	$("#" + id).addClass("this").prevAll().addClass("prev");       
	$("#" + id).nextAll().addClass("next");    
	$("nav li").click(function(){
		$("#container").css("max-width", "100%")
		var id=$(this).attr("data-rol");    
		$("nav li").removeClass("on");    
		$(this).addClass("on");    
		$(".content").removeClass("prev this next");       
		$("#" + id).addClass("this").prevAll().addClass("prev");       
		$("#" + id).nextAll().addClass("next");    
	});
	//사진 클릭 시
	$(".main_box").click(function(){
		$("nav li").removeClass("on");
		$(".content").removeClass("prev this next");
		$("#container").css("max-width", "1200px");
	});
	//롤링배너
	$(".roll_right").click(function(){
		$(".roll li").eq(0).insertAfter(".roll li:last-child");
	});
	$(".roll_left").click(function(){
		$(".roll li").eq(-1).insertBefore(".roll li:first-child");
	});
	//ajax
	$(".roll li").click(function(){
		var _this =$(this);
		var liurl =_this.data("url");
		$(".notebook").html();
		$.ajax({
			type : 'post', 
			url : liurl, 
			dataType : 'html', 
			success : function(data) { 
				$(".notebook").html(data);
			}
		});
	});
	//팝업 닫기
	$(".close").click(function(){
		$(".thankyou_message").css("display", "none");
	});
	$(".ppt").click(function(){
		var img = document.getElementsByName("ppt");
		for (var x = 0; x < img.length; x++) {
			img.item(x).onclick=function() {window.open(this.src)}; 
		}
	});
});

