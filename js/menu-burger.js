$(document).ready(function(){
	$('.top-row-burger').click(function(event){
		$('.top-row-burger, .menu-burger').toggleClass('active');
		$('body').toggleClass('lock');
	});

});