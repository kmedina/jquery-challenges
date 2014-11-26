// mobile slide
$('#btn-menu').click(function(){
	$('.nav-main').slideToggle(); //slideDown()

});

// panels
$('.panel-content').hide();

$('.panel-title').on("click", function(){
	//$('.panel-content').slideToggle();
	$(this).next().slideToggle();
});