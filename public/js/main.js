$(document).ready(function() {
	
	/* ======= Sliding menu underline ====== */
	// Menu has active item
	//Ref: https://codepen.io/digistate/pen/OXXjXM
	 
	$nav = $("#navigation"),
	$slideLine = $("#slide-line"),
	$currentItem = $("#navigation li.active");
	

	$(window).on('resize load', function() {
		
		if ($currentItem[0]) {
			$slideLine.css({
			  "width": $currentItem.width(),
			  "left": $currentItem.position().left
			});
		}
	});
	
	// Underline transition
	$nav.find("li").hover(
		// Hover on
		function(){
		  $slideLine.css({
		    "width": $(this).width(),
		    "left": $(this).position().left
		  });
		},
		// Hover out
		function(){
		  if ($currentItem[0]) {
		    // Go back to current
		    $slideLine.css({
		      "width": $currentItem.width(),
		      "left": $currentItem.position().left
		    });
		  } else {
		    // Disapear
		    $slideLine.width(0);
		  }
		}
	);


	var $videoSrc;  
	$('.btn-my-cv').click(function() {
			$videoSrc = $('.btn-my-cv').data( "src" );
	});

	// when the modal is opened autoplay it  
	$('#ybModal').on('shown.bs.modal', function (e) {
		$("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
	});
});