

	$(".plus__off").on("click", function(){
	   $("p").toggleClass("active");
	   $(".plus__on").toggleClass("active1");
	   $(".plus__on").on("click", function(){
	   $("p").toggleClass("active");
	   $(".plus__on").toggle();
	});
	});
