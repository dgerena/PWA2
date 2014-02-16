$(document).ready(function(){
	// console.log("hey listen"+' '+$('label').text());
	// $('label').text();
	$('.input_text').attr('value',$('label').text());
	var textHold= $('label').text();
	$('.input_text').addClass('hint');
	$('label').remove();
	$('.input_text').focusin(function(){
		$(this).val(' ');
	});
	$('.input_text').focusout(function(){
		if($(this).val()==" "){
			$(this).val(textHold);
		}
	});
});