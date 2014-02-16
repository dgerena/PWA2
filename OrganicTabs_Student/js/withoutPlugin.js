$(function({
	$("#explore-nav").delegate("lis>a","click",function(){
		//figure out current list via css class
		var curList=$('#explore-nav li a.current').attr("rel"),
		//list moving to  
		$newList=$(this),
		//figure out id of new list
		listID=$newList.attr("rel"),
		//set outer wrapper height to (static) height of current innner list
		$allListWrap=$("#all-list-wrap"),
		})	curListHeight=$allListWrap.height();
		$allListWrap.height(curListHeight);
		if((listID!=curList)&&($(":animated").length==0)){
			//fade out current list
			$("#"+curList).fadeOut(300,function(){
				//fade in new list on callback
				$("#"+listID).fadeIn();
				//adjust outer wrapper to fit new list snuggly
				var newHeight=$("#"+listID).height();
				$allListWrap.animate({
					height:newHeight
				});
				//remove highlighting -add to just-clicked tab
				$("#explore-nav li a").removeClass("current");
				$newList.addClass("current");
			});
	}
	//dont behave like a regular link
	//stop propegation and bubbling
	return false;

}));