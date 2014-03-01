//jquery syntax
$(document).ready(function(){
	$(document).load(function(){
		$.get('xhr/check_login.php',function(response){
			if (response.error) {
				window.location.assign("index.html")
			}else{
	    		window.location.assign("app.html");
	    	}
	    });
	});
	$('.member-entry').click(function(){
		$(".popout").toggle();
	});
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
   		
    });
	//values captured for use in login
    $("#current-submit").click(function(){
    	var user=$('#name').val();
    	var pass=$('#password').val();
    	$.ajax({
			url:'xhr/login.php',
			type:'post',
			dataType:'json',
			data:{
			username:user,
			password:pass
			},
			success:function(response){
				if(response.error) {
					alert(response.error);
				}else{
					window.location.assign("app.html");
				};
			}//object has no closing; 
		});
    });
    $('#reg-submit').click(function(){
    	var nameReg=$('#name-reg').val();
    	var email=$('#email').val();
    	var passReg=$('#reg-password').val();
    	var passVal=$('#validate').val();
    	$.ajax({
    		url:'xhr/register.php',
    		type:'post',
    		dataType:'json',
    		data:{
				username:nameReg,
				password:passreg||passVal,
				email:email
    		},
    		success:function(response){
    			if (response.error) {
    				console.log('error '+response.error);
    			}else{
    				window.location.assign("app.html");
    			};
    		}

    	});
    });
    $('#logout').click(function(){
    	$.get('xhr/logout.php',function(){
    		window.location.assign("index.html");
    	});
    });

    $(function() {
	    $( "#tabs" ).tabs().addClass( "ui-tabs-vertical ui-helper-clearfix" );
	    $( "#tabs li" ).removeClass( "ui-corner-top" ).addClass( "ui-corner-left" );
  		$('.carousel-center').click(function(){
    		$('html').css();
    	});
    	$('#accordion').accordion({
    		heightStyle:"content"
    	});
  	});
  	/* -----------------------------form fields*/
  	/* range slider value and a field input to type specific number*/
  	$('.rangeslide').on('click mouseout',function(){
		var val=$(this).val();

		$('.guest_num').val(val);
		console.log(this.value)
    });
   	$('.guest_num').on('keyup',function(){
		var val=$(this).val();
		$('.rangeslide').val(val);
		console.log(this.value);
    });
   	
});