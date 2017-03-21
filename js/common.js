$(document).ready(function() {
	
	$(".table_wr .content a, .nav_logo ul a").mPageScroll2id();

	$(".table_wr .content h1").animated("fadeInDown", "fadeOutUp");
	$(".table_wr .content p, .table_wr .content .btn, .section_header").animated("fadeInUp", "fadeOutDown");
	$(".about_content .circleAbig").animated("fadeInDown", "fadeOutDown");
	$(".about_content .circleObig").animated("fadeInDown", "fadeOutDown");
	$(".about_content .circleFbig").animated("fadeInDown", "fadeOutDown");
	$(".about_content .circleMbig").animated("fadeInDown", "fadeOutDown");
	$(".build").animated("fadeInUp", "fadeOutDown");
	$(".s_team .full_team .team_item .photo").animated("flipInY", "flipOutY");

});
$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});

