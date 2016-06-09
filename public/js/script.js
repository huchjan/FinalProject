$(document).ready(function () {
    $(".item_expand").click(function () {
        $(".item_container:focus").blur(function(){
            console.log("help")
        });
        
    })

})


$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4, #mobile-nav').toggleClass('open');
	});
});

//$(document).ready(function(){
//	$('#hamburger').click(function(){
//	    $(this).toggleClass('open');
//	});
//});