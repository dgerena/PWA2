//jquery syntax
$(document).ready(function(){
	$('.member-entry').click(function(){
		$(".popout").toggle();
	});
		console.log($(window));

	$('.module').hide({height:100},1000);
	$('.tabmodule').before('<ul class="tabings"></ul>');
	$('.module').each(function(){
		$('.tabings').append('<li class="listing" ><h2>'+$(this).attr('id')+'</h2></li>');
	});
	$('.listing').click(function(){
		if($(this).find('h2').html()=='listing active'){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
			if($(this).find('h2').html()=='wedding'){
				$('#wedding').show();
				$('#birthday').hide()
				$('#corperate').hide()
			}else if($(this).find('h2').html()=='birthday'){
				$('#birthday').show();
				$('#wedding').hide();
				$('#corperate').hide();
			}else if($(this).find('h2').html()=='corperate'){
				$('#corperate').show();
				$('#wedding').hide();
				$('#birthday').hide();
			}
		}
	});
	$("#carousel").waterwheelCarousel({
      // include options like this:
      // (use quotes only for string values, and no trailing comma after last option)
      // option: value,
      // option: value
    });
});