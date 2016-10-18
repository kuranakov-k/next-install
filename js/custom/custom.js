$(function() {
	
	$('.gallery-masonry').masonry({
	  itemSelector: '.projects-gallery-block',
	  columnWidth: 380,
	  gutter: 15
	});

	$('#js-projects-slider').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    });

});