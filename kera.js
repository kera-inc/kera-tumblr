$(window).load(function(){
	var grid = 25;
	
	$('.post').each(function() {
		// measure the width of the item and round it up to the nearest grid size
		var size = $(this).height();
		var roundedSize = Math.ceil(size/grid) * grid - 1;
		console.log(roundedSize)
		$(this).css({ height: roundedSize });
	});
	
	var blogHeight = $('.blog_wrapper').height();
	$('.blog_sidebar').css({ height: blogHeight });
	
	var marquee = $('.blog_marquee'),
	pos = marquee.offset();
	
	$(window).scroll(function(){
		if($(this).scrollTop() > pos.top+marquee.height() && marquee.hasClass('default')){
			marquee.fadeOut(1, function(){
				$(this).removeClass('default').addClass('fixed').fadeIn(1);
				$('.marquee_close').show();
			});
		} else if($(this).scrollTop() <= pos.top && marquee.hasClass('fixed')){
			marquee.fadeOut(1, function(){
				$(this).removeClass('fixed').addClass('default').fadeIn(1);
				$('.marquee_close').hide();
			});
		}
	});
	
	$('.marquee_close').click(function() {
		$('.blog_marquee_wrapper').hide();
		$('.blog_marquee').hide();
		$('header').css('border-bottom', 'solid 1px #DDD');
		$('.blog_posts').css('padding-top', '48px');
	});

});
