
$(document).ready(function() {
 	$(window).scroll(function(){
	 	var scroposi = $(this).scrollTop();
	 	console.log(scroposi);
 		if(scroposi >= 250){
 			$("#headerSignUp").hide();
 		}
	 });

	$("#slideshow").cycle({
				fx: 'fade',
				pager: '#smallnav',
				pause:   1,
				speed: 1800,
				timeout:  3500
	});

	 $(function(){
      $(".element").typed({
        strings: ["Celebrating Emerging Pathmakers, Achievers, Creators, and Leaders."],
        typeSpeed: 10
      });
  	  });

	

	 $(".btn").click(function(){

	 	$("#headerSignUp").show();
	 });



	function stick_relocate(){
		var window_top = $(window).scrollTop();

		var div_top = $("#sticky-anchor").offset().top;
		if(window_top > div_top){
			$("#nav").addClass("stick");
		}else{
			$("#nav").removeClass("stick");
		}
	}

	$(function() {
	$(window).scroll(stick_relocate);
	stick_relocate();

	});

    $("#celebrate").one("mouseover", function(){
        $(".element").prepend('<sup><img src="images/twitter5.png" height="25px" width="25px"></sup>');
    });
});
