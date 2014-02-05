jQuery(document).ready(function(){

	jQuery('<a id="prev" href="#">Prev</a>').appendTo("#slider");
	jQuery('<a id="next" href="#">Next</a>').appendTo("#slider");
	
	var slide = jQuery("#slider .slide");
	jQuery("#slider .slide").first().show();
	

	jQuery("#prev").click(function(){
		var currentSlide = jQuery("#slider .slide:visible");
		if (currentSlide.prev().length > 0) {
			currentSlide.prev().fadeIn("slow").show();
		}
		else {
			slide.last().fadeIn("slow").show();
		}
		currentSlide.fadeTo("slow").hide();
	});
	jQuery("#next").click(function(){
		var currentSlide = jQuery("#slider .slide:visible");
		if (currentSlide.next().length > 0) {
			currentSlide.next().fadeIn("slow").show();
		}
		else {
			slide.first().fadeIn("slow").show();
		}
		currentSlide.fadeTo("slow").hide();
	});

	
});