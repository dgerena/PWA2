//jquery syntax
$(document).ready(function(){
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
    var username=$('#name').val();
    var password=$('#password').val();
    $("#current-submit").click(function(){
	    var username=$('#name').val();
    	var password=$('#password').val();
    	$.ajax({
			url:'xhr/login.php',
			type:'post',
			dataType:'json',
			data:{
			username:username,
			password:password
			},
			success:function(response){
				console.log(response.user+"works");
				window.location.assign("app.html");
			}//object has no closing; 
		});
    });
    // $('#logout').click(function(){
    // 	window.location.reload(true);
    // });
    var checkLogin = function(){
    	if ($(document).location.href== window.location.href('http://localhost:8888/cake_construct/app.html')){
		    $.ajax({
		            url: 'xhr/check_login.php',
		            type: 'get',
		            dataType: 'json',
		            success: function(response){
		            	console.log(response);
		                    if(response.user){
		                            window.location.assign("app.html");
		                    } else {
		                            window.location.reload(true);
		                    }
		            }
		    });
		};
	    console.log("lol");
    };
    // checkLogin();
    // var init=function(){
    // 	if (window.location.value) {};
    // 	checkLogin();
    // }
    // init(); i know why its repeating endlessly but not sure i remmber how to correctly have it check login.

});