// owl carousel slider home
$(document).ready(function(){
  $(".header-slider").owlCarousel({
  	    autoplay: true, 
	    smartSpeed: 3000,
	    items: 1,
	    loop: true,
	    mouseDrag : false,     
	    dots: true,
	    animateOut: 'slideOutDown',
	    animateIn: 'fadeIn'
  });
});

$(function(){

var $grid = $('.grid').isotope({
  // options
  
  layoutMode: 'fitRows',
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

}); 