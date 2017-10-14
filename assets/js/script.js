$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
	$("#ex6SliderVal").text(slideEvt.value);
});
$("#ex7").slider();
$("#ex7").on("slide", function(slideEvt) {
	$("#ex7SliderVal").text(slideEvt.value);
});

$(document).on('click', '#screen_map-area .dropdown-menu', function (e) {
  e.stopPropagation();
});

$('#facilities_select').on('click', 'button', function(){
	$(this).toggleClass('btn-secondary');
	$(this).toggleClass('btn-primary');
})