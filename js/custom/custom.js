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

	$("#tv-slick").slick({
		infinite: true,
		slidesToShow: 1,
		sliderToScroll: 1,
		arrows: true
	});

	$( "#tabs" ).tabs({
  active: 0
	});

	map = new google.maps.Map(document.getElementById('map'), {
  center: {lat: 55.7881109, lng: 37.607902},
  zoom: 17,
  scrollwheel: false
});


	var marker = new google.maps.Marker({
        position: new google.maps.LatLng(55.7881109, 37.607902),
        map: map,
        title: 'Next-Install',
        icon: "img/pin.png",
    });

	map.addListener("click", function() {
    map.setOptions({
      scrollwheel: true
    });
  });
  map.addListener("drag", function() {
    map.setOptions({
      scrollwheel: true
    });
  });
  map.addListener("mouseout", function() {
    map.setOptions({
      scrollwheel: false
    });
  });

});