$(window).on("scroll", function() {
	var position = $("#begin").offset();

	if ($(window).scrollTop() > position.top - 80) {
		$("nav").addClass("active");
	} else {
		$("nav").removeClass("active");
	};
});

$(".tab-list").on("click", ".tab", function(e) {
                  e.preventDefault();
                  
                  $(".tab").removeClass("active");
                  $(".tab-content").removeClass("show");
                  $(this).addClass("active");
                  $($(this).attr("href")).addClass("show");
                  });


$("html").click(function() {
                $(".dropdown").hide();
                });

$("nav ul li a:not(:only-child)").click(function(e) {
                                        $(this).siblings(".dropdown").toggle();
                                        
                                        $(".dropdown").not($(this).siblings()).hide();
                                        e.stopPropagation();
                                        });



$(".accordion").on("click", ".accordion-header", function() {
                   $(this).toggleClass("active").next().slideToggle();
                   });
