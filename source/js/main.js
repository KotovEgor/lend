$('.menu a').click( function(){ 
	var scroll_el = $(this).attr('href');
	var fixed_offset = 150;
	if ($(scroll_el).length != 0) { 
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top - fixed_offset}, 800); 
	}
	return false; 
});



